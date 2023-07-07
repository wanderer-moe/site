import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import prisma from '@lucia-auth/adapter-prisma'
import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client'

export const auth = lucia({
    adapter: prisma(new PrismaClient()),
    env: dev ? 'DEV' : 'PROD',
    middleware: sveltekit(),
    transformDatabaseUser: (userData) => {
        return {
            userId: userData.id,
            username: userData.username,
        }
    },
})

export type Auth = typeof auth
