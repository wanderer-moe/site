import { auth, emailVerificationToken } from '$lib/server/lucia'
import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ params, locals }) => {
    try {
        const session = await locals.auth.validate()
        // redirect to login page if not logged in
        if (!session) throw redirect(302, '/account/login/')
        // else, log out and redirect to main page
        await auth.invalidateSession(session.sessionId)
    } catch (err) {
        console.log(err)
        return new Response(null, {
            status: 401,
        })
    }
    throw redirect(302, '/')
}
