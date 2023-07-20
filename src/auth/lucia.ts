import { lucia } from 'lucia'
import { nextjs } from 'lucia/middleware'
import { prisma as prismaAdapter } from '@lucia-auth/adapter-prisma'
import { cache } from 'react'
import { cookies } from 'next/headers'
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
            email: data.email,
            emailVerified: data.emailVerified,
            pronouns: data.pronouns,
            bio: data.bio,
            dateJoined: data.dateJoined,
        }
    },
})

export type Auth = typeof auth

export const getPageSession = cache(() => {
    const authRequest = auth.handleRequest({
        request: null,
        cookies,
    })
    return authRequest.validate()
})
