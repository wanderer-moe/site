import { error, redirect } from '@sveltejs/kit'

export const GET = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (!session) {
        throw redirect(302, '/login')
    }

    const { error: err } = await supabase.auth.signOut()

    if (err) {
        throw error(500, 'Authentication error')
    }

    throw redirect(302, '/login')
}
