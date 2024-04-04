'use client'

import * as React from 'react'
import { APIClient } from '@/lib/api-client/client'
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

/**
 * AuthProvider component that wraps the application with an authentication context.
 *
 * @param {React.ReactNode} children - The child components to be wrapped by the AuthProvider.
 * @returns {React.ReactNode} The wrapped child components.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [authState, setAuthState] = React.useState<any>({
        session: null,
        isLoadingSession: true,
    })

    React.useEffect(() => {
        let isMounted = true

        /**
         * Fetches session data from the API and updates the authentication state.
         *
         * @return {Promise<void>} A promise that resolves once the session data has been fetched and the authentication state has been updated.
         */
        const fetchSessionData = async () => {
            const sessionRequest = await APIClient.get(
                '/v2/auth/validate',
            ).then((res) => res)
            if (isMounted) {
                setAuthState({
                    isLoadingSession: false,
                    session: sessionRequest || null,
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
        /**
         * Refreshes the session data by making a request to the API endpoint for session validation.
         *
         * @return {Promise<any>} The session data returned by the API endpoint.
         */
        refreshSessionData: async () => {
            const sessionRequest = await APIClient.get(
                '/v2/auth/validate',
            ).then((res) => res)
            setAuthState({
                isLoadingSession: false,
                session:
                    sessionRequest.success === 'true' ? sessionRequest : null,
            })
            return sessionRequest.user
        },
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

/**
 * Returns the authenticated user context.
 *
 * @return {AuthContext} The authenticated user context.
 */
export const useAuthContext = () => {
    const context = React.useContext(AuthContext)

    if (!context)
        throw new Error('useAuthContext must be used within an AuthProvider')

    return context
}

export function useCurrentUser() {
    const authContext = useAuthContext()
    return authContext?.session?.user
}

export function useCurrentSession() {
    const authContext = useAuthContext()
    return authContext?.session?.session
}

export function useCurrentSessionAndUser() {
    const authContext = useAuthContext()
    return authContext?.session
}

/**
 * Logs out the user by sending a request to the server and redirecting to the homepage.
 *
 * @return {Promise<void>} - A Promise that resolves when the user is successfully logged out.
 */
export const logoutUser = async () => {
    await APIClient.get('/v2/auth/logout')
        .then(() => {
            window.location.href = '/'
            console.log('user logged out')
        })
        .catch((error) => {
            console.error(error)
        })
}
