import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import {
    checkPassword,
    checkEmail,
    checkUsername,
} from '@/lib/regex/validateInformation'

export const POST = async (request: NextRequest) => {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')

    if (!username || !password || !email) {
        return NextResponse.json(
            {
                error: 'Please fill out all fields.',
            },
            {
                status: 400,
            },
        )
    }

    if (
        !checkUsername(username as string) ||
        !checkPassword(password as string) ||
        !checkEmail(email as string)
    ) {
        return NextResponse.json(
            {
                error: 'Invalid credentials.',
            },
            {
                status: 400,
            },
        )
    }

    try {
        const user = await auth.createUser({
            key: {
                providerId: 'username',
                // @ts-expect-error
                providerUserId: username.toLowerCase(),
                // @ts-expect-error
                password,
            },
            attributes: {
                username,
                email,
                email_verified: 0,
                date_joined: new Date().toISOString(),
                verified: 0,
                role: 'USER',
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
