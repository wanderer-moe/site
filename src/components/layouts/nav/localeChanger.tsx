'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function LocaleChanger() {
    const locales = ['en']

    const locale = 'en'

    return (
        <div>
            <Button variant="outline">
                <Image
                    src={`/locales/${locale}.png`}
                    width={18}
                    height={18}
                    alt={locale}
                />
            </Button>
        </div>
    )
}
