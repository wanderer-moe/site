// src/app.d.ts

declare global {
    namespace App {
        interface Locals {
            auth: import('$lib/server/lucia').Auth
            authRequest: import('lucia-auth').AuthRequest
        }

        interface Platform {
            env?: {
                DB: D1Database
            }
        }
    }
}

/// <reference types="lucia" />
declare global {
    namespace Lucia {
        type Auth = import('$lib/server/lucia').Auth
        type UserAttributes = {
            id: int
            username: string
            email: string
            pronouns: string
            connections: string
            isPlus: int
            roles: string
        }
    }
}

export {}
