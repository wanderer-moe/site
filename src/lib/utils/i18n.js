import dayjs from 'dayjs'
import {
    register,
    addMessages,
    init,
    getLocaleFromNavigator,
    locale as $locale,
} from 'svelte-i18n'
import { browser } from '$app/environment'

// @ts-ignore
import en from '@/i18n/site/en.json'

const INIT_OPTIONS = {
    fallbackLocale: 'en',
    initialLocale: 'en',
}

const htmlLocaleCode = {
    en: 'en',
    nl: 'nl',
    ja: 'ja',
    lol: 'lol',
    it: 'it',
    ro: 'ro',
    sv: 'sv',
    vi: 'vi',
    ar: 'ar',
}

const dayjsLocales = {
    en: () => import('dayjs/locale/en'),
    nl: () => import('dayjs/locale/de'),
    ja: () => import('dayjs/locale/ja'),
    lol: () => import('dayjs/locale/en'),
    it: () => import('dayjs/locale/it'),
    ar: () => import('dayjs/locale/ar'),
    ro: () => import('dayjs/locale/ro'),
    sv: () => import('dayjs/locale/sv'),
    vi: () => import('dayjs/locale/vi'),
}

let isLoaded = false

$locale.subscribe((value) => {
    if (value === null) return

    // @ts-ignore
    if (isLoaded) localStorage.setItem('locale', value)

    if (typeof window !== 'undefined') {
        // @ts-ignore
        dayjsLocales[value]().then(() => dayjs.locale(value))
        // @ts-ignore
        document.documentElement.setAttribute('lang', htmlLocaleCode[value])
    }
})

const supportedLanguage = [
    'en',
    'nl',
    'ja',
    'lol',
    'it',
    'ar',
    'ro',
    'sv',
    'vi',
]
addMessages('en', en)

// @ts-ignore
register('nl', () => import('@/i18n/site/nl.json'))
// @ts-ignore
register('ja', () => import('@/i18n/site/ja.json'))
// @ts-ignore
register('lol', () => import('@/i18n/site/lol.json'))
// @ts-ignore
register('it', () => import('@/i18n/site/it.json'))
// @ts-ignore
register('ar', () => import('@/i18n/site/ar.json'))
// @ts-ignore
register('ro', () => import('@/i18n/site/ro.json'))
// @ts-ignore
register('sv', () => import('@/i18n/site/sv.json'))
// @ts-ignore
register('vi', () => import('@/i18n/site/vi.json'))

export async function startClient() {
    init({
        ...INIT_OPTIONS,
    })

    if (browser) {
        let used = 'en'
        const savedLocale = localStorage.getItem('locale')
        // @ts-ignore
        const detectedLocale = getLocaleFromNavigator().substring(0, 2)
        if (savedLocale !== null) {
            if (!supportedLanguage.includes(savedLocale)) {
                localStorage.setItem('locale', 'en')
            } else {
                used = savedLocale
            }
        } else if (supportedLanguage.includes(detectedLocale)) {
            used = detectedLocale
        }

        $locale.set(used)
        isLoaded = true

        // @ts-ignore
        document.documentElement.setAttribute('lang', htmlLocaleCode[used])
        console.log('i18n:', used)
    }
}
