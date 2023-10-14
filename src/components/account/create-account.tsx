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
import { siteConfig } from '@/config/site'
import { useState } from 'react'
import { AlternateAuthProviders } from '@/components/account/alternate-auth-providers'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'

const CreateAccountSchema = z
    .object({
        username: z
            .string({
                required_error: 'Username is required',
                invalid_type_error: 'Username must be a string',
            })
            .min(3, 'Username must be at least 3 characters long')
            .max(32, 'Username must be at most 32 characters long'),
        email: z
            .string({
                required_error: 'Email is required',
                invalid_type_error: 'Email must be a string',
            })
            .email('Email must be a valid email address'),
        password: z
            .string({
                required_error: 'Password is required',
                invalid_type_error: 'Password must be a string',
            })
            .regex(
                new RegExp('.*[A-Z].*'),
                'One uppercase character is required',
            )
            .regex(
                new RegExp('.*[a-z].*'),
                'One lowercase character is required',
            )
            .regex(new RegExp('.*\\d.*'), 'One number is required')
            .regex(
                new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
                'One special character is required',
            )
            .min(8, 'Password must be at least 8 characters long')
            .max(128, 'Password must be at most 128 characters long'),
        passwordConfirm: z
            .string({
                required_error: 'Password confirmation is required',
                invalid_type_error: 'Password confirmation must be a string',
            })
            .regex(
                new RegExp('.*[A-Z].*'),
                'One uppercase character is required',
            )
            .regex(
                new RegExp('.*[a-z].*'),
                'One lowercase character is required',
            )
            .regex(new RegExp('.*\\d.*'), 'One number')
            .regex(
                new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
                'One special character is required',
            )
            .min(8, 'Password must be at least 8 characters long')
            .max(128, 'Password must be at most 128 characters long'),
        secretKey: z
            .string({
                required_error: 'Secret key is required',
                invalid_type_error: 'Secret key must be a string',
            })
            .min(1, 'Secret key must be at least 1 characters long')
            .max(128, 'Secret key must be at most 128 characters long'),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
    })

export function CreateAccount() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const { toast } = useToast()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = CreateAccountSchema.safeParse(Object.fromEntries(formData))

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
            const res = await fetch(`${siteConfig.urls.api}/auth/signup`, {
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
                            Create Your Account
                        </CardTitle>
                        <CardDescription>
                            {/* TODO(dromzeh): text here */}
                            <AlternateAuthProviders />
                            <Separator className="mt-4" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input
                                disabled={isLoading}
                                id="username"
                                name="username"
                                type="text"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                disabled={isLoading}
                                id="email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-x-2">
                                <Label htmlFor="password">Password</Label>
                                <div onClick={() => setShowPassword((p) => !p)}>
                                    {showPassword ? (
                                        <Eye className="h-4 w-4" />
                                    ) : (
                                        <EyeOff className="h-4 w-4" />
                                    )}
                                </div>
                            </div>
                            <Input
                                disabled={isLoading}
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center gap-x-2">
                                <Label htmlFor="passwordConfirm">
                                    Confirm Password
                                </Label>
                                <div
                                    onClick={() =>
                                        setShowPasswordConfirm((p) => !p)
                                    }>
                                    {showPasswordConfirm ? (
                                        <Eye className="h-4 w-4" />
                                    ) : (
                                        <EyeOff className="h-4 w-4" />
                                    )}
                                </div>
                            </div>
                            <Input
                                disabled={isLoading}
                                id="passwordConfirm"
                                name="passwordConfirm"
                                type={showPasswordConfirm ? 'text' : 'password'}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="secretKey">
                                Secret Key (Temporary, required to Create
                                Account)
                            </Label>
                            <Input
                                disabled={isLoading}
                                id="secretKey"
                                name="secretKey"
                                type="password"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button
                            disabled={isLoading}
                            className="w-full font-semibold">
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Create Account
                        </Button>
                        <div className="mt-4 text-zinc-400">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="transition-all hover:text-white">
                                Login.
                            </Link>
                        </div>
                        <div className="mt-2 text-center text-xs text-zinc-400">
                            By creating an account, you agree to our{' '}
                            <Link
                                href="/legal/terms-of-service"
                                className="transition-all hover:text-white">
                                Terms of Service
                            </Link>{' '}
                            and our{' '}
                            <Link
                                href="/legal/privacy-policy"
                                className="transition-all hover:text-white">
                                Privacy Policy
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}
