import { auth, passwordResetToken } from '$lib/server/lucia'
import { fail, type Actions } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'
import { redirect } from '@sveltejs/kit'
import { LuciaError } from 'lucia-auth'
import type { PageServerLoad } from './$types'
import { env } from '$env/dynamic/private'
import { sendPasswordResetEmail } from '$lib/server/resend'
import { LuciaTokenError } from '@lucia-auth/tokens'

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const form = await request.formData()
        const email = form.get('email')
        console.log(form)
        if (!email || typeof email !== 'string') {
            return fail(400, {
                message: 'Invalid input',
            })
        }

        const dbUser = await prisma.AuthUser.findFirst({
            where: {
                email: email,
            },
        })
        if (!dbUser) {
            return fail(400, {
                message: 'Email not found',
            })
        }

        const user = auth.transformDatabaseUser(dbUser)
        const token = await passwordResetToken.issue(user.userId)
        const link = `${
            env.BASE_URL
        }/account/forgot-password/${token.toString()}`

        await sendPasswordResetEmail(email, link, user.username)

        return {
            success: true,
        }
    },
}

export const load: PageServerLoad = async ({ locals }) => {
    const { session, user } = await locals.auth.validateUser()
    if (session && user) throw redirect(302, '/')
    return {}
}
