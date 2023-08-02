import type { Session } from 'lucia'
import * as React from 'react'

export type SessionState = {
    session: Session | null
    setSession: React.Dispatch<React.SetStateAction<Session | null>>
}

export type AuthContext = {
    refreshSession: () => Promise<Session | null>
} & SessionState

export const AuthContext = React.createContext<AuthContext>({
    session: null,
    setSession: () => {},
    refreshSession: async () => null,
})
