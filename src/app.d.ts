// src/app.d.ts

/// <reference types="lucia" />
declare global {
    namespace App {
        interface Locals {
            auth: import('$lib/server/lucia').Auth
            authRequest: import('lucia-auth').AuthRequest
        }

        interface Platform {
            env: {
                DB: D1Database
            }
        }
    }

    namespace Lucia {
        type Auth = import('$lib/server/lucia').Auth
        type UserAttributes = {
            username: string
        }
    }
}

export {}
