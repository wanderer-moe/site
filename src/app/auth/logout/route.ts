import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export const POST = async (request: NextRequest) => {
    const authRequest = auth.handleRequest({ request, cookies })
    const session = await authRequest.validate()
    if (!session) {
        return new Response('Not authenticated', {
            status: 401,
        })
    }
    // invalidate the session
    await auth.invalidateSession(session.sessionId)
    authRequest.setSession(null)
    return new Response(null, {
        status: 302,
        headers: {
            Location: '/auth/login',
        },
    })
}
