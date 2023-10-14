'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp, Languages as LanguagesIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { setCookie, getCookie } from 'cookies-next'

interface Locale {
    id: string
    label: string
}

const locales: Locale[] = [
    { id: 'en', label: 'English' },
    { id: 'nl', label: 'Nederlands' },
    { id: 'ja', label: '日本語' },
    { id: 'it', label: 'Italiano' },
    { id: 'ro', label: 'Română' },
    { id: 'sv', label: 'Svenska' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'ar', label: 'العربية' },
]

export function LocaleChanger(): React.ReactElement {
    const [locale, setLocale] = useState<string>('en')

    React.useEffect(() => {
        setLocale(getCookie('locale') ?? 'en')
    }, [])

    const handleLocaleChange = (newLocale: string): void => {
        setLocale(newLocale)
        setCookie('locale', newLocale)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <LanguagesIcon size={16} />
                    <span className="ml-2">
                        {locales.find((l) => l.id === locale)?.label}
                    </span>
                    <ChevronUp size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[200]">
                <DropdownMenuRadioGroup value={locale}>
                    {locales.map((l) => (
                        <DropdownMenuRadioItem
                            key={l.id}
                            value={l.id}
                            onClick={() => handleLocaleChange(l.id)}>
                            {l.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
