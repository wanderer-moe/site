'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SettingsItems = {
    Account: '/account/settings',
    Security: '/account/settings/security',
    Connections: '/account/settings/connections',
}

interface SettingsSidebarItemProps {
    children: React.ReactNode
    href: string
}

const SettingsSidebarItem = ({ children, href }: SettingsSidebarItemProps) => {
    const pathname = usePathname()
    const active = pathname === href

    return (
        <div className="flex w-full flex-row items-center gap-2">
            <Link href={href}>
                <Button
                    variant={active ? 'secondary' : 'outline'}
                    className="w-full">
                    {children}
                </Button>
            </Link>
        </div>
    )
}

export function SettingsSidebar() {
    return (
        <section className="mb-6 md:mb-0 md:w-1/3">
            <div className="flex w-full flex-col gap-2">
                {Object.entries(SettingsItems).map(([key, value]) => {
                    return (
                        <SettingsSidebarItem key={key} href={value}>
                            {key}
                        </SettingsSidebarItem>
                    )
                })}
            </div>
        </section>
    )
}
