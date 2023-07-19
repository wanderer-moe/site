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

export function Login() {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login to account</CardTitle>
                <CardDescription>
                    Enter your email and password to login to your account.
                    Don&apos;t have an account?{' '}
                    <Link href="/auth/signup" passHref className="text-white">
                        Sign Up
                    </Link>
                    <Separator className="my-4" />
                    <Link
                        href="/auth/forgot-password"
                        passHref
                        className="text-white">
                        Forgot Password?
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="email@domain.com"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••••"
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Login</Button>
            </CardFooter>
        </Card>
    )
}
