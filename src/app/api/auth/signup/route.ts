import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { generateUserId } from '@/lib/generateUserId'
import type { NextRequest } from 'next/server'

export const POST = async (request: NextRequest) => {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')

    if (
        typeof username !== 'string' ||
        username.length < 3 ||
        username.length > 18
    ) {
        return NextResponse.json(
            {
                error: 'Invalid username',
            },
            {
                status: 400,
            },
        )
    }
    if (
        typeof password !== 'string' ||
        password.length < 6 ||
        password.length > 50
    ) {
        return NextResponse.json(
            {
                error: 'Invalid password',
            },
            {
                status: 400,
            },
        )
    }
    try {
        const UUID = await generateUserId() // this has validation to check if the UUID is already in use
        console.log(UUID)
        const user = await auth.createUser({
            userId: UUID,
            key: {
                providerId: 'username',
                providerUserId: username.toLowerCase(),
                password,
            },
            attributes: {
                username,
                email,
                role: 'USER',
                email_verified: 0,
                bio: 'No bio set',
                date_joined: new Date().toISOString(),
            },
        })
        // creating a session for the user after they sign up
        const session = await auth.createSession({
            userId: user.userId,
            attributes: {},
        })
        const authRequest = auth.handleRequest({
            request,
            cookies,
        })
        authRequest.setSession(session)
        return new Response(null, {
            status: 302,
            headers: {
                Location: '/account/',
            },
        })
    } catch (e) {
        console.error(e)
        return NextResponse.json(
            {
                error: 'An internal error occurred.',
            },
            {
                status: 500,
            },
        )
    }
}
