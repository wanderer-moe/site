import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp, Languages as LanguagesIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const locales = [
    { id: 'en', label: 'English' },
    { id: 'nl', label: 'Nederlands' },
    { id: 'ja', label: '日本語' },
    { id: 'it', label: 'Italiano' },
    { id: 'ro', label: 'Română' },
    { id: 'sv', label: 'Svenska' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'ar', label: 'العربية' },
]

export function LocaleChanger() {
    const [locale, setLocale] = useState('en')

    function handleLocaleChange(newLocale: string) {
        setLocale(newLocale)
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
