import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/layouts/navbar'
import { AuthProvider } from './authprovider'
import { SiteFooter } from '@/components/layouts/footer'
import { ThemeProvider } from '@/components/theme-provider'

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
                <AuthProvider>
                    <ThemeProvider attribute="class" defaultTheme="dark">
                        <Navbar />
                        {children}
                        <SiteFooter />
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
