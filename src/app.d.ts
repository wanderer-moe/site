/// <reference types="lucia" />
import type { D1Database } from '@cloudflare/workers-types'

declare global {
    namespace App {
        interface Locals {
            auth: import('$lib/server/lucia').Auth
            authRequest: import('lucia-auth').AuthRequest
            UserAttributes: {
                username: string
            }
        }

        interface Platform {
            env: {
                DB: D1Database
            }
            context: {
                waitUntil(promise: Promise<any>): void
            }
            caches: CacheStorage & { default: Cache }
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
