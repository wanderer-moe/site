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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

// TODO: fancy validation w/ regex and error handling
export function Login() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        console.log(formData)
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: formData,
            redirect: 'manual',
        })

        console.log(response)
        if (response.status === 0) {
            console.log('success')
            return router.refresh()
        } else {
            console.log('failure')
        }
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login to account</CardTitle>
                    <CardDescription>
                        Enter your email and password to login to your account.
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/account/signup"
                            passHref
                            className="text-white">
                            Sign Up
                        </Link>
                        <Separator className="my-4" />
                        <Link
                            href="/account/forgot-password"
                            passHref
                            className="text-white">
                            Forgot Password?
                        </Link>
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            disabled={isLoading}
                            id="username"
                            name="username"
                            type="username"
                            placeholder="username"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            disabled={isLoading}
                            id="password"
                            name="password"
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
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
