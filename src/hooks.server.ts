import {
    RedirectHook,
    type StringRedirects,
} from '@svackages/sveltekit-hook-redirect'
import type { Handle } from '@sveltejs/kit'
import { getAuth } from '$lib/server/lucia'
// import { createD1 } from '$lib/server/miniflare'
import { dev } from '$app/environment'

// redirects from old site & third party urls
const redirects: StringRedirects = {
    '/asset-request-form': {
        to: 'https://docs.google.com/forms/d/1wEflnF1asaLtRGqo6RMUKD55nRwy1-V77ogW1wLmvus/',
        code: 301,
    },
    '/site-suggestions': {
        to: 'https://docs.google.com/forms/d/1uIfRAYUbmYne6BbgoJuO6VyD6TdLnvvEZPCeBjCQmlI/',
        code: 301,
    },
    '/discord': {
        to: 'https://discord.com/invite/659KAFfNd6',
        code: 301,
    },
    '/donate': {
        to: 'https://www.buymeacoffee.com/marcelmd',
        code: 301,
    },
}

export const handle: Handle = async ({ event, resolve }) => {
    // if (dev) {
    //     // hacky method to get platform.context running in dev (why)
    //     event.platform ??= {
    //         env: {
    //             DB: createD1({ type: 'file', path: '.mf/d1-database.sqlite3' }),
    //         },
    //     }
    // }

    // event.locals.auth = await getAuth(event.platform)
    // event.locals.authRequest = event.locals.auth.handleRequest(event)
    return RedirectHook({ event, resolve, redirects })
}
