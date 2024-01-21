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
import Link from 'next/link'
import { z } from 'zod'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const resetPasswordSchema = z
    .object({
        token: z.string({
            required_error: 'Token is required',
            invalid_type_error: 'Token must be a string',
        }),
        newPassword: z.string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        }),
        newPasswordConfirm: z.string({
            required_error: 'Password confirmation is required',
            invalid_type_error: 'Password confirmation must be a string',
        }),
    })
    .refine((data) => data.newPassword === data.newPasswordConfirm, {
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
    })

export function UpdateNewPaswsord() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    const { toast } = useToast()

    const searchParams = useSearchParams()
    const router = useRouter()

    if (!searchParams.has('token')) {
        router.push('/account/forgot-password')
    }

    const token = searchParams.get('token') ?? ''

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = resetPasswordSchema.safeParse(Object.fromEntries(formData))

        if (!data.success) {
            const errorMessage = data.error.issues
                .map((issue) => issue.message)
                .join('\n')

            toast({
                title: 'Error',
                description: errorMessage,
            })
            setIsLoading(false)
            return
        }

        try {
            const res = await fetch(
                `http://localhost:8787/v2/auth/reset-password`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: formData,
                },
            )

            if (res.ok && res.status === 200) {
                toast({
                    title: 'Success',
                    description: 'Password updated.',
                })
                setIsLoading(false)
                return
            }
        } catch (e) {
            toast({
                title: 'Error',
                description: 'Something went wrong.',
                variant: 'destructive',
            })
            setIsLoading(false)
            return
        }

        toast({
            title: 'Success',
            description: 'Password updated.',
        })
        setIsLoading(false)
    }

    return (
        <div className="w-[500px]">
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">
                            Update Password
                        </CardTitle>
                        <CardDescription>
                            Enter your token provided by email & your new
                            password below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="token">Token</Label>
                            <Input
                                disabled={isLoading}
                                id="token"
                                name="token"
                                type="token"
                                value={token}
                            />
                        </div>
                        <div className="grid select-none gap-2">
                            <Label htmlFor="newPassword">Password</Label>
                            <div className="flex gap-2">
                                <Input
                                    disabled={isLoading}
                                    id="newPassword"
                                    name="newPassword"
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
                        <div className="grid select-none gap-2">
                            <Label htmlFor="newPasswordConfirm">
                                Confirm Password
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    disabled={isLoading}
                                    id="newPasswordConfirm"
                                    name="newPasswordConfirm"
                                    type={
                                        showPasswordConfirm
                                            ? 'text'
                                            : 'password'
                                    }
                                    className="pr-6"
                                />
                                <div
                                    onClick={() =>
                                        setShowPasswordConfirm((p) => !p)
                                    }
                                    className="flex items-center rounded-md border border-border p-2 hover:cursor-pointer">
                                    {showPasswordConfirm ? (
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
                            Update Password
                        </Button>
                        <div className="mt-4 text-muted-foreground">
                            Remember your password?{' '}
                            <Link
                                href="/login"
                                className="text-foreground transition-all hover:underline">
                                Login
                            </Link>
                            .
                        </div>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}
