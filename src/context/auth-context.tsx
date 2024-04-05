'use client'

import * as React from 'react'
import { AuthAPIClient } from '@/lib/api-client/client'
import type { get_V2authvalidate } from '@/lib/api-client/openapi'
import { z } from 'zod'

export type Session = z.infer<get_V2authvalidate['response']>

export type SessionState = {
    session: Session | null
    isLoadingSession: boolean
}

export type AuthContextType = {
    refreshSessionData: () => Promise<Session | null>
} & SessionState

export const AuthContext = React.createContext<AuthContextType>({
    session: null,
    isLoadingSession: true,
    refreshSessionData: async () => null,
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [authState, setAuthState] = React.useState<any>({
        session: null,
        isLoadingSession: true,
    })

    React.useEffect(() => {
        let isMounted = true

        const fetchSessionData = async () => {
            let requestError = false

            const sessionRequest = await AuthAPIClient.get('/v2/auth/validate')
                .then((res) => res)
                .catch((error) => {
                    requestError = true
                    console.error(error)
                })

            if (isMounted) {
                setAuthState({
                    isLoadingSession: false,
                    session:
                        requestError || !sessionRequest ? null : sessionRequest,
                })
            }
        }

        void fetchSessionData()

        return () => {
            isMounted = false
        }
    }, [])

    const authContextValue: AuthContextType = {
        ...authState,

        refreshSessionData: async () => {
            let requestError = false

            const sessionRequest = await AuthAPIClient.get('/v2/auth/validate')
                .then((res) => res)
                .catch((error) => {
                    requestError = true
                    console.error(error)
                })

            setAuthState({
                isLoadingSession: false,
                session:
                    requestError || !sessionRequest ? null : sessionRequest,
            })

            return sessionRequest?.user
        },
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = React.useContext(AuthContext)

    if (!context)
        throw new Error('useAuthContext must be used within an AuthProvider')

    return context
}

export const logoutUser = async () => {
    await AuthAPIClient.get('/v2/auth/logout')
        .then(() => {
            window.location.href = '/'
            console.log('user logged out')
        })
        .catch((error) => {
            console.error(error)
        })
}
