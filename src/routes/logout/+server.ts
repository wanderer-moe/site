import { error, redirect } from '@sveltejs/kit'

export const GET = async () => {
    throw redirect(302, '/login')
}
