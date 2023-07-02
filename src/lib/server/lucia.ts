import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import { d1 } from '@lucia-auth/adapter-sqlite'
import { dev } from '$app/environment'
// import { D1Database } from '@cloudflare/workers-types'

export const getAuth = async (platform: App.Platform) => {
    if (!platform?.env?.DB) {
        throw new Error('No database found inside platform context')
    }

    return lucia({
        adapter: d1(platform.env.DB),
        env: dev ? 'DEV' : 'PROD',
        middleware: sveltekit(),
        transformDatabaseUser: (userData) => {
            return {
                username: userData.username,
            }
        },
    })
}

export type Auth = Awaited<ReturnType<typeof getAuth>>
