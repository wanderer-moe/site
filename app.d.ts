import type { PrismaClient } from '@prisma/client'

var __prisma: PrismaClient | undefined

/// <reference types="lucia" />
declare namespace Lucia {
    type Auth = import('@/auth/lucia').Auth
    type DatabaseUserAttributes = {
        username: string
        email: string
        email_verified: number
        pronouns?: string
        bio?: string
        date_joined: string
    }
    type DatabaseSessionAttributes = {}
}
