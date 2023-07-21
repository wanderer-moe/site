import type { PrismaClient } from '@prisma/client'

var __prisma: PrismaClient | undefined

/// <reference types="lucia" />
declare namespace Lucia {
    type Auth = import('@/auth/lucia').Auth
    type DatabaseUserAttributes = {
        username: string
        username_colour?: string
        avatar_url?: string
        banner_url?: string
        email: string
        email_verified: number
        pronouns?: string
        verified: number
        bio?: string
        date_joined: Date
        role: string
    }
    type DatabaseSessionAttributes = {}
}
