import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

export const generateUserId = async () => {
    let userId = uuidv4()

    // Check if userId already exists in the db, if it does, generate a new one
    // while (await prisma.user.findUnique({
    //         where: {
    //             id: userId
    //         }
    //     })) {
    //     userId = uuidv4()
    // }

    return userId
}
