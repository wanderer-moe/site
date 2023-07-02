// lib/server/lucia.ts
import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import { d1 } from '@lucia-auth/adapter-sqlite'
import { dev } from '$app/environment'

export const auth = (platform: App.Platform) => {
    const adapter = d1(platform.env.DB)

    return lucia({
        adapter,
        env: dev ? 'DEV' : 'PROD',
        middleware: sveltekit(),
        transformDatabaseUser: (userData) => {
          return {
                userId: userData.userId,
                username: userData.username,
            }
        },
    })
}

export type Auth = ReturnType<typeof auth>
