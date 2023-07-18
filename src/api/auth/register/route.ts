import prisma from '@/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { generateUserId } from '@/lib/generateUserId'

export async function POST(req: Request) {
    try {
        const { username, email, password } = (await req.json()) as {
            username: string
            email: string
            password: string
        }
        const hashed_password = await hash(password, 12)

        const user = await prisma.user.create({
            data: {
                id: generateUserId(),
                username,
                email: email.toLowerCase(),
                hashed_password: hashed_password,
                email_verified: 0,
                date_joined: new Date(),
            },
        })

        return NextResponse.json({
            user: {
                name: user.username,
                email: user.email,
            },
        })
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: 'error',
                message: error.message,
            }),
            { status: 500 },
        )
    }
}
