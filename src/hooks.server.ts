import {
    RedirectHook,
    type StringRedirects,
} from '@svackages/sveltekit-hook-redirect'
import type { Handle } from '@sveltejs/kit'

// redirects from old site & third party urls
const redirects: StringRedirects = {
    '/characterparts': {
        to: '/genshin-impact/character-sheets',
        code: 301,
    },
    '/splashart': {
        to: '/genshin-impact/splash-art',
        code: 301,
    },
    '/emotes': {
        to: '/genshin-impact/emotes',
        code: 301,
    },
    '/tcg': {
        to: '/genshin-impact/tcg',
        code: 301,
    },
    // ^^ old site redirects
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
    '/chat': {
        to: 'https://discord.com/invite/659KAFfNd6',
        code: 301,
    },
    '/github': {
        to: 'https://github.com/wanderer-moe',
        code: 301,
    },
    '/donate': {
        to: 'https://www.buymeacoffee.com/marcelmd',
        code: 301,
    },
    '/preregister': {
        to: 'https://waitlist.wanderer.moe/',
        code: 301,
    },
    '/waitlist': {
        to: 'https://waitlist.wanderer.moe/',
        code: 301,
    },
}

export const handle: Handle = ({ event, resolve }) =>
    RedirectHook({ event, resolve, redirects })
