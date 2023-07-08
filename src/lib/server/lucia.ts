import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'
import prisma from '@lucia-auth/adapter-prisma'
import { dev } from '$app/environment'
import { PrismaClient } from '@prisma/client'
import { idToken } from '@lucia-auth/tokens'

export const auth = lucia({
    adapter: prisma(new PrismaClient()),
    env: dev ? 'DEV' : 'PROD',
    middleware: sveltekit(),
    transformDatabaseUser: (userData) => {
        return {
            userId: userData.id,
            username: userData.username,
            email: userData.email,
            roles: userData.roles,
            emailVerified: userData.email_verified,
            pronouns: userData.pronouns ?? '',
        }
    },
})

export const passwordResetToken = idToken(auth, 'password-reset', {
    expiresIn: 60 * 60,
})

export const emailVerificationToken = idToken(auth, 'email_verification', {
    expiresIn: 60 * 60,
})

export type Auth = typeof auth
