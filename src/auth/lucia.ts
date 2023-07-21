import { lucia } from 'lucia'
import { nextjs } from 'lucia/middleware'
import { prisma as prismaAdapter } from '@lucia-auth/adapter-prisma'
import __prisma from '@/lib/prisma'

export const auth = lucia({
    adapter: prismaAdapter(__prisma),
    env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
    middleware: nextjs(),
    sessionCookie: {
        expires: false,
    },
    getUserAttributes: (data) => {
        return {
            username: data.username,
            usernameColour: data.usernameColour || null,
            avatarUrl: data.avatarUrl || null,
            bannerUrl: data.bannerUrl || null,
            email: data.email,
            emailVerified: data.emailVerified,
            pronouns: data.pronouns || null,
            verified: data.verified,
            bio: data.bio || null,
            role: data.role,
            dateJoined: data.dateJoined,
        }
    },
})

export type Auth = typeof auth
