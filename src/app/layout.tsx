import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/layouts/navbar'
import { AuthProvider } from './authprovider'
import { SiteFooter } from '@/components/layouts/footer'

export const metadata: Metadata = {
    title: 'wanderer.moe',
    description: 'A centralized database of various game assets',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('bg-background min-h-screen')}>
                <AuthProvider>
                    <Navbar />
                    {children}
                    <SiteFooter />
                </AuthProvider>
            </body>
        </html>
    )
}
