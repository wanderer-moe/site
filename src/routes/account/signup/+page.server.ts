import { auth } from '$lib/server/lucia'
import { fail, type Actions } from '@sveltejs/kit'
import { Prisma } from '@prisma/client'
import { redirect } from '@sveltejs/kit'
import { LuciaError } from 'lucia-auth'
import type { PageServerLoad } from './$types'

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const form = await request.formData()
        const username = form.get('username')
        const password = form.get('password')
        const email = form.get('email')
        if (
            !username ||
            !password ||
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !email ||
            typeof email !== 'string'
        ) {
            return fail(400, {
                message: 'Invalid input',
            })
        }
        try {
            const user = await auth.createUser({
                primaryKey: {
                    providerId: 'username',
                    providerUserId: username,
                    password,
                },
                attributes: {
                    username,
                    email,
                    roles: 'user',
                    connections: '{}',
                },
            })
            const session = await auth.createSession(user.userId)
            locals.auth.setSession(session)
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002' &&
                error.message?.includes('username')
            ) {
                return fail(400, {
                    message: 'Username is already being used',
                })
            }
            if (
                error instanceof LuciaError &&
                error.message === 'AUTH_DUPLICATE_KEY_ID'
            ) {
                return fail(400, {
                    message: 'Username is already being used',
                })
            }
            console.error(error)
            return fail(500, {
                message: 'An unknown error occurred while completing signup.',
            })
        }
    },
}

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) throw redirect(302, '/account/')
    return {}
}
