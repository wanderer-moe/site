import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { AuthProvider } from './authprovider'

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="en">
            <body className={cn('bg-background min-h-screen', inter.className)}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
