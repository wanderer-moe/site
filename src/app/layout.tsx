import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/layouts/nav/navbar'
import { SiteFooter } from '@/components/layouts/footer/footer'
import { ThemeProvider } from '@/components/themeProvider'
import { getPageSession } from '@/auth/lucia'

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
            <body className={cn('min-h-screen bg-background')}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <Navbar />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}
