'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Languages as LanguagesIcon, ChevronUp } from 'lucide-react'

export function LocaleChanger() {
    const locales = {
        en: 'English',
        ja: '日本語',
        zh: '中文',
    }

    const locale = 'en'
    return (
        <>
            <Button variant="outline">
                <LanguagesIcon size={16} />
                <span className="mx-2">{locales[locale]}</span>
                <ChevronUp size={16} />
            </Button>
        </>
    )
}
