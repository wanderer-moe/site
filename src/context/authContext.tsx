'use client'

import * as React from 'react'
import type { Session } from 'lucia'
// import { redirect } from 'next/navigation'

export type SessionState = {
    session: Session | null
    isLoadingSession: boolean
}

export type AuthContextType = {
    refreshSessionData: () => Promise<Session | null>
} & SessionState

export const API_URL = 'https://v2-api-testing.wanderer.moe'

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
            const sessionRequest = await fetchJson<any>(
                `${API_URL}/auth/validate`,
            )
            console.log(sessionRequest)
            if (isMounted) {
                setAuthState({
                    isLoadingSession: false,
                    session: sessionRequest?.session || null,
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
            const sessionRequest = await fetchJson<any>(
                `${API_URL}/auth/validate`,
            )
            console.log(sessionRequest)
            setAuthState({
                isLoadingSession: false,
                session:
                    sessionRequest.success !== 'false'
                        ? sessionRequest.session
                        : null,
            })
            return sessionRequest.session
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

export const useCurrentSession = () => useAuthContext().session

export const useCurrentUser = () => useCurrentSession()?.user ?? null

export const logoutUser = async () => {
    fetch('https://v2-api-testing.wanderer.moe/auth/logout', {
        method: 'POST',
        credentials: 'include',
    })
        .then(() => {
            console.log('logged out')
        })
        .catch((error) => {
            console.error(error)
        })
}

export async function fetchJson<T>(path: string): Promise<T | null> {
    try {
        const res = await fetch(path, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })

        if (!res.ok)
            throw new Error(`Fetching failed with status: ${res.status}`)

        const data = (await res.json()) as T
        return data
    } catch (error) {
        return null
    }
}
