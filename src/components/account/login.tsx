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
import { Loader2, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { AlternateAuthProviders } from '@/components/account/alternate-auth-providers'
import { useToast } from '@/components/ui/use-toast'
import { z } from 'zod'

const LoginSchema = z.object({
    username: z
        .string({
            required_error: 'Username is required',
            invalid_type_error: 'Username must be a string',
        })
        .min(3, 'Username must be at least 3 characters long')
        .max(32, 'Username must be at most 32 characters long'),
    password: z
        .string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        })
        .regex(new RegExp('.*[A-Z].*'), 'One uppercase character is required')
        .regex(new RegExp('.*[a-z].*'), 'One lowercase character is required')
        .regex(new RegExp('.*\\d.*'), 'One number is required')
        .regex(
            new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
            'One special character is required',
        )
        .min(8, 'Password must be at least 8 characters long')
        .max(128, 'Password must be at most 128 characters long'),
})

export function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const { toast } = useToast()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = LoginSchema.safeParse(Object.fromEntries(formData))

        if (!data.success) {
            // TODO(dromzeh): error dependant on field instead of toast
            const errorMessage = data.error.issues
                .map((issue) => issue.message)
                .join(', ')

            toast({
                title: 'Invalid form data',
                description: errorMessage,
            })
            setIsLoading(false)
            return
        }

        try {
            const res = await fetch(`${siteConfig.urls.api}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            })

            if (res.ok && res.status === 200) {
                window.location.href = '/'
            } else {
                throw new Error('Response failed')
            }
        } catch (error) {
            console.error(error)
            toast({
                title: 'Something went wrong',
                description: 'Please try again later',
                variant: 'destructive',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-[500px]">
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-center text-2xl">
                            Login to Your Account
                        </CardTitle>
                        <CardDescription>
                            <AlternateAuthProviders />
                            <Separator className="mt-4" />
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
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    className="select-none text-muted-foreground transition-colors hover:text-white hover:underline"
                                    href="/account/forgot-password">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                <Input
                                    disabled={isLoading}
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="pr-6"
                                />
                                <div
                                    onClick={() => setShowPassword((p) => !p)}
                                    className="flex items-center rounded-md border border-border p-2 hover:cursor-pointer">
                                    {showPassword ? (
                                        <Eye className="h-4 w-4" />
                                    ) : (
                                        <EyeOff className="h-4 w-4" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button
                            disabled={isLoading}
                            className="w-full font-semibold">
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Login
                        </Button>
                        <div className="mt-4 text-muted-foreground">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/signup"
                                className="text-foreground transition-all hover:underline">
                                Create one
                            </Link>
                            .
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}
