import { auth, passwordResetToken } from '$lib/server/lucia'
import { fail, type Actions } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'
import { redirect } from '@sveltejs/kit'
import { LuciaError } from 'lucia-auth'
import type { PageServerLoad } from './$types'
import { env } from '$env/dynamic/private'
import { sendPasswordResetConfirmationEmail } from '$lib/server/resend'
import { LuciaTokenError } from '@lucia-auth/tokens'
import { checkPassword } from '$lib/helpers/auth/account/check'

export const actions: Actions = {
    default: async ({ request, locals, params }) => {
        const form = await request.formData()
        const password = form.get('password')
        const passwordConfirm = form.get('passwordConfirm')

        // console.log(password)

        if (
            !password ||
            !passwordConfirm ||
            typeof password !== 'string' ||
            typeof passwordConfirm !== 'string' ||
            password !== passwordConfirm ||
            !checkPassword(password)
        ) {
            return fail(400, {
                message: 'Invalid input',
            })
        }

        try {
            const token = await passwordResetToken.validate(params.token ?? '')
            let user = await auth.getUser(token.userId)
            if (user.emailVerified !== 1) {
                // if the user's email is not verified, verify it as part of the password reset flow
                user = await auth.updateUserAttributes(user.userId, {
                    email_verified: 1,
                })
            }
            // invalidate all sessions for the user, update the password, and create a new session
            // TODO: fix this as it always returns an error
            await auth.invalidateAllUserSessions(user.userId)
            await auth.updateKeyPassword('id', user.userId, password)
            const session = await auth.createSession(user.userId)
            locals.auth.setSession(session)
            sendPasswordResetConfirmationEmail(user.email, user.username)
        } catch (err) {
            console.log(err)
            if (err instanceof LuciaError) {
                return fail(400, { message: `${err.message}` })
            } else if (err instanceof LuciaTokenError) {
                return fail(400, { message: 'Invalid token' })
            } else {
                return fail(500, { message: 'Internal server error' })
            }
        }
        // redirect to the account page
        throw redirect(302, '/account/')
    },
}

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) throw redirect(302, '/account/')
    return {}
}
