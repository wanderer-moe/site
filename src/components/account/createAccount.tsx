'use client'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export function CreateAccount() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                        Create your account
                    </CardTitle>
                    <CardDescription>
                        Enter whatever username you&apos;d like, your email and
                        a strong password to create your account.
                        <Separator className="my-4" />
                        Already have an account?{' '}
                        <Link
                            href="/auth/login"
                            passHref
                            className="text-white">
                            Login
                        </Link>
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="username"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            disabled={isLoading}
                            id="email"
                            type="email"
                            placeholder="email@domain.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            disabled={isLoading}
                            id="password"
                            type="password"
                            placeholder="••••••••••"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button disabled={isLoading} className="w-full">
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Create Account
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
