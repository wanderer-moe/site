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

        console.log(params)

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
            if (!user.emailVerified) {
                user = await auth.updateUserAttributes(user.userId, {
                    email_verified: 1,
                })
            }
            await auth.invalidateAllUserSessions(user.userId)
            await auth.updateKeyPassword('email', user.email, password)
            const session = await auth.createSession(user.userId)
            locals.auth.setSession(session)
        } catch (err) {
            if (err instanceof LuciaError) {
                return fail(400, { message: `${err.message}` })
            }
        }
        throw redirect(302, '/account/')
    },
}

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) throw redirect(302, '/account/')
    return {}
}
