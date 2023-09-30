'use client'

/*
Authentication Context for Easy Session Data Sharing Between Components and Pages.
Since our Backend is completely separate from the frontend, we need a way to share session data across different parts of our application.
The <AuthProvider> is already included in Layout.tsx, which means we can access session data from any component effortlessly.
*/

// TODO(dromzeh): define types instead of any

import * as React from 'react'
import { siteConfig } from '@/config/site'
import type { Session } from 'lucia'

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
            const sessionRequest = await fetchJson<any>(
                `${siteConfig.urls.api}/auth/validate`,
            )
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
        /**
         * Refreshes the session data by making a request to the API endpoint for session validation.
         *
         * @return {Promise<any>} The session data returned by the API endpoint.
         */
        refreshSessionData: async () => {
            const sessionRequest = await fetchJson<any>(
                `${siteConfig.urls.api}/auth/validate`,
            )
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

export const useCurrentSession = () => useAuthContext().session

export const useCurrentUser = () => useCurrentSession()?.user ?? null

/**
 * Logs out the user by sending a request to the server and redirecting to the homepage.
 *
 * @return {Promise<void>} - A Promise that resolves when the user is successfully logged out.
 */
export const logoutUser = async () => {
    fetch(`${siteConfig.urls.api}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    })
        .then(() => {
            window.location.href = '/'
            console.log('user logged out')
        })
        .catch((error) => {
            console.error(error)
        })
}

/**
 * Fetches JSON data from the specified path.
 *
 * @param {string} path - The path from which to fetch the JSON data.
 * @return {Promise<T | null>} A Promise that resolves to the fetched JSON data, or null if an error occurs.
 */
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
