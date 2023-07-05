// TODO: reimplement redirect hooks

import { getAuth } from '$lib/server/lucia'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    // event.locals.auth = await getAuth(event.platform);
    // event.locals.authRequest = event.locals.auth.handleRequest(event);
    return await resolve(event)
}
