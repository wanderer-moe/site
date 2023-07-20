import { PrismaClient } from '@prisma/client'

declare global {
    var __prisma: PrismaClient | undefined
}

const __prisma = globalThis.__prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.__prisma = __prisma

export default __prisma
