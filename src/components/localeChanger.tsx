'use client'

import { Button } from '@/components/ui/button'

export function LocaleChanger() {
    const localeFlags = {
        en: '🇺🇸',
    }

    return (
        <div>
            <Button variant="secondary">{localeFlags['en']}</Button>
        </div>
    )
}
