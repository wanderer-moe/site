import { SiteFooter } from '@/components/layouts/footer/footer'
import { Navbar } from '@/components/layouts/nav/navbar'
import { ScrollToTop } from '@/components/layouts/nav/scrollToTop'
import { ThemeProvider } from '@/components/themeProvider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL('https://next.wanderer.moe'),
    title: 'wanderer.moe',
    description: 'A centralized database of various game assets.',
    icons: {
        icon: '/icon.svg',
    },
    openGraph: {
        type: 'website',
        description: 'A centralized database of various game assets.',
        locale: 'en_US',
        url: 'https://wanderer.moe',
        siteName: 'wanderer.moe',
        images: [
            {
                url: '/og',
                width: 1200,
                height: 630,
                alt: 'wanderer.moe',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'wanderer.moe',
        images: ['/og'],
    },
    themeColor: '#BFB7D6',
}

export const runtime = 'edge'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background')}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <ScrollToTop />
                    <Navbar />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}
