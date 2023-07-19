import { generateRandomString, isWithinExpiration } from 'lucia/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TokenExpiryTime = 1000 * 60 * 60 * 2

export const createEmailVerificationToken = async (userId: string) => {
    // check if we already have a token for this user
    const existingToken = await prisma.emailVerificationToken.findFirst({
        where: {
            user_id: userId,
        },
    })
    if (existingToken) {
        // check if experation is over 1 hour, reuse token if it is
        if (
            isWithinExpiration(
                Number(existingToken.expires) - TokenExpiryTime / 2,
            )
        ) {
            return existingToken.id
        }
    }
    const token = generateRandomString(64)
    await prisma.emailVerificationToken.create({
        data: {
            id: token,
            expires: new Date().getTime() + TokenExpiryTime,
            user_id: userId,
        },
    })
    return token
}

export const validateEmailVerificationToken = async (token: string) => {
    // check if token exists
    const tokenRecord = await prisma.emailVerificationToken.findFirst({
        where: {
            id: token,
        },
    })
    if (!tokenRecord) {
        throw new Error('Invalid token')
    }
    // delete token after we've used it
    await prisma.emailVerificationToken.delete({
        where: {
            id: token,
        },
    })

    // check if grabbed token was expired
    if (!isWithinExpiration(Number(tokenRecord.expires))) {
        throw new Error('Token expired')
    }
    return tokenRecord.user_id
}
