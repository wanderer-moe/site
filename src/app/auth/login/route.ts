import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import { LuciaError } from 'lucia'

export const POST = async (request: NextRequest) => {
    // const formData = await request.formData()
    // const username = formData.get('username')
    // const password = formData.get('password')
    // if (
    //     typeof username !== 'string' ||
    //     username.length < 4 ||
    //     username.length > 31
    // ) {
    //     return NextResponse.json(
    //         {
    //             error: 'Invalid username',
    //         },
    //         {
    //             status: 400,
    //         },
    //     )
    // }
    // if (
    //     typeof password !== 'string' ||
    //     password.length < 1 ||
    //     password.length > 255
    // ) {
    //     return NextResponse.json(
    //         {
    //             error: 'Invalid password',
    //         },
    //         {
    //             status: 400,
    //         },
    //     )
    // }
    // try {
    //     // validation
    //     const user = await auth.useKey(
    //         'username',
    //         username.toLowerCase(),
    //         password,
    //     )
    //     const session = await auth.createSession({
    //         userId: user.userId,
    //         attributes: {},
    //     })
    //     const authRequest = auth.handleRequest({
    //         request,
    //         cookies,
    //     })
    //     authRequest.setSession(session)
    //     return new Response(null, {
    //         status: 302,
    //         headers: {
    //             Location: '/',
    //         },
    //     })
    // } catch (e) {
    //     if (
    //         e instanceof LuciaError &&
    //         (e.message === 'AUTH_INVALID_KEY_ID' ||
    //             e.message === 'AUTH_INVALID_PASSWORD')
    //     ) {
    //         return NextResponse.json(
    //             {
    //                 error: 'Incorrect username or password',
    //             },
    //             {
    //                 status: 400,
    //             },
    //         )
    //     }
    //     return NextResponse.json(
    //         {
    //             error: 'An unknown error occurred',
    //         },
    //         {
    //             status: 500,
    //         },
    //     )
    return new Response(null, {
        status: 302,
        headers: {
            Location: '/',
        },
    })
}
