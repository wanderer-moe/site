import { SiteFooter } from '@/components/layouts/footer/footer'
import { NavBar } from '@/components/layouts/nav/navigation-bar'
import { ScrollToTop } from '@/components/layouts/nav/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/context/auth-context'
import type { Metadata, Viewport } from 'next'
import { DeviceWarning } from '@/components/device-warning'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
// import { AuthProvider } from '@/context/authContext'

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
}

export const viewport: Viewport = {
    themeColor: '#BFB7D6',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-background">
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <AuthProvider>
                        <ScrollToTop />
                        <NavBar />
                        <DeviceWarning />
                        {children}
                        <Toaster />
                        <SiteFooter />
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
