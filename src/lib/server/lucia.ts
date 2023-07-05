import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import { d1 } from '@lucia-auth/adapter-sqlite'
import type { D1Database } from '@cloudflare/workers-types'
import { dev } from '$app/environment'

export const getAuth = async (platform: App.Platform) => {
    return await lucia({
        adapter: d1(platform.env.DB as D1Database),
        env: dev ? 'DEV' : 'PROD',
        middleware: sveltekit(),
    })
}

export type Auth = Awaited<ReturnType<typeof getAuth>>
