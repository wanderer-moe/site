import type { Session } from 'lucia'
import * as React from 'react'

export type SessionState = {
    session: Session | null
    isLoadingSession: boolean
}

export type AuthContextType = {
    refreshSessionData: () => Promise<Session | null>
} & SessionState

const API_URL = 'https://v2-api-testing.wanderer.moe/'

export const AuthContext = React.createContext<AuthContextType>({
    session: null,
    isLoadingSession: true,
    refreshSessionData: async () => null,
})

export const AuthProvider: React.FC = ({
    children,
}: React.PropsWithChildren) => {
    const [authState, setAuthState] = React.useState<SessionState>({
        session: null,
        isLoadingSession: true,
    })

    React.useEffect(() => {
        let isMounted = true

        const fetchSessionData = async () => {
            const session = await fetchJson<Session>(
                `${API_URL}/auth/session/validate`,
            )
            if (isMounted) {
                setAuthState({
                    isLoadingSession: false,
                    session,
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
            const session = await fetchJson<Session>(
                `${API_URL}/auth/session/validate`,
            )
            setAuthState({
                isLoadingSession: false,
                session,
            })
            return session
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

export async function fetchJson<T>(path: string): Promise<T | null> {
    try {
        const res = await fetch(path, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok)
            throw new Error(`Fetching failed with status: ${res.status}`)

        const data = (await res.json()) as T
        return data
    } catch (error) {
        return null
    }
}
