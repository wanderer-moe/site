import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export const POST = async (request: NextRequest) => {
    // const authRequest = auth.handleRequest({ request, cookies })
    // console.log('auth')
    // const session = await authRequest.validate()
    // console.log(session)
    // if (!session) {
    //     console.log('no session')
    //     return new Response(null, {
    //         status: 401,
    //     })
    // }
    // console.log('session')
    // await auth.invalidateSession(session.sessionId)
    // authRequest.setSession(null)
    // console.log('invalidate')
    return new Response(null, {
        status: 302,
        headers: {
            Location: '/',
        },
    })
}
