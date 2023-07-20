import { v4 as uuidv4 } from 'uuid'

export const generateUserId = async () => {
    let userId = uuidv4()
    // i need to implement actual good logic for this instead of creating 23098409234809 prisma client instances
    // so for now, this code is unused and i'm letting lucia handle generating the user id
    return userId
}
