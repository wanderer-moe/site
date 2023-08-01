import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layouts/nav/navbar'
import { SiteFooter } from '@/components/layouts/footer/footer'
import { ThemeProvider } from '@/components/themeProvider'
import { getSession } from '@/auth/getSession'
import { ScrollToTop } from '@/components/layouts/nav/scrollToTop'

export const metadata: Metadata = {
    title: 'wanderer.moe',
    description: 'A centralized database of various game assets',
    icons: {
        icon: '/icon.svg',
    },
    openGraph: {
        type: 'website',
        description: 'A centralized database of various game assets',
        locale: 'en_US',
        url: 'https://wanderer.moe',
        siteName: 'wanderer.moe',
    },
    themeColor: '#BFB7D6',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background')}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <ScrollToTop />
                    <Navbar session={session} />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}
