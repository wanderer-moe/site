'use client'

import { Button } from '@/components/ui/button'

export function LocaleChanger() {
    const localeFlags = {
        en: '🇺🇸',
    }

    return (
        <div>
            <Button variant="ghost">{localeFlags['en']}</Button>
        </div>
    )
}
