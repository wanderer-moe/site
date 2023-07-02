// src/app.d.ts
declare global {
    namespace App {
        interface Locals {
            auth: import('lucia').AuthRequest
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
}

/// <reference types="lucia" />
declare global {
    namespace Lucia {
        type Auth = import('$lib/server/lucia').Auth
        type UserAttributes = {
			username: string
			userId: string
        }
    }
}

export {}
