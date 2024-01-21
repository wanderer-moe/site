import { Metadata } from 'next'
import { Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { SettingsSidebar } from '@/components/account/settings/navigation/settings-sidebar'

export const metadata: Metadata = {
    title: 'Settings - wanderer.moe',
    description: 'Manage your account settings.',
}

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <div className="mx-auto min-h-screen max-w-screen-xl p-5">
                <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                    <div className="whitespace-nowrap transition-colors hover:text-foreground">
                        <Link href={`/`}>
                            <Home size={16} />
                        </Link>
                    </div>
                    <ChevronRight size={16} />
                    <div className="whitespace-nowrap transition-colors hover:text-foreground">
                        <Link href={`/account`}>Account</Link>
                    </div>
                    <ChevronRight size={16} />
                    <div className="whitespace-nowrap text-foreground">
                        <Link href={`/account/settings`}>Settings</Link>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
