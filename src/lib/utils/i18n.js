import dayjs from 'dayjs'
import {
    register,
    addMessages,
    init,
    getLocaleFromNavigator,
    locale as $locale,
} from 'svelte-i18n'
import { browser } from '$app/environment'

import en from '../../locales/en.json'

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
    ar: 'ar',
    ro: 'ro',
    sv: 'sv',
    vi: 'vi',
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

    if (isLoaded) localStorage.setItem('locale', value)

    if (typeof window !== 'undefined') {
        dayjsLocales[value]().then(() => dayjs.locale(value))
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

register('nl', () => import('../../locales/nl.json'))
register('ja', () => import('../../locales/ja.json'))
register('lol', () => import('../../locales/lol.json'))
register('it', () => import('../../locales/it.json'))
register('ar', () => import('../../locales/ar.json'))
register('ro', () => import('../../locales/ro.json'))
register('sv', () => import('../../locales/sv.json'))
register('vi', () => import('../../locales/vi.json'))

export async function startClient() {
    init({
        ...INIT_OPTIONS,
    })

    if (browser) {
        let used = 'en'
        const savedLocale = localStorage.getItem('locale')
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

        document.documentElement.setAttribute('lang', htmlLocaleCode[used])
        console.log('i18n:', used)
    }
}
