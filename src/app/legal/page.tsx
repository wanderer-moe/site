import * as React from 'react'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardDescription,
} from '@/components/ui/card'

const LegalPages = [
    {
        name: 'Terms of Service',
        description:
            'The terms and conditions that govern your usage of our website and services as a user.',
        lastUpdated: '2023-08-03',
    },
    {
        name: 'Privacy Policy',
        description:
            'How we gather, utilize, and safeguard your personal information when you engage with our website and services.',
        lastUpdated: '2023-08-04',
    },
    {
        name: 'Cookie Policy',
        description:
            'Our use of cookies and similar technologies on our website, designed to enhance your experience and provide anonymized analytics.',
        lastUpdated: '2023-08-30',
    },
]

export default function LegalPage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/`}>
                        <Home size={16} />
                    </Link>
                </div>
                <ChevronRight size={16} />
                <div className="whitespace-nowrap text-foreground transition-colors">
                    <Link href={`/legal`}>Legal</Link>
                </div>
            </div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">
                    Legal Documents and Policies
                </h1>
                <p className=" text-muted-foreground">
                    We prioritize legality and strict regulatory compliance.
                    Presented below are our legal documents and policies, which
                    oversee and regulate your utilization of our website and
                    services.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {LegalPages.map((page) => (
                    <Card
                        className="p-2 transition-all hover:cursor-pointer hover:border-white/50 "
                        key={page.name}>
                        <Link
                            href={`/legal/${page.name
                                .toLowerCase()
                                .replace(/ /g, '-')}`}>
                            <CardHeader className="relative flex items-center">
                                <CardTitle className="text-lg">
                                    {page.name}
                                </CardTitle>
                                <p className="text-xs text-muted-foreground">
                                    Last Updated: {page.lastUpdated}
                                </p>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {page.description}
                                </CardDescription>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}
