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
import { Loader2 } from 'lucide-react'

const ForgotPasswordSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
        .email('Email must be a valid email address'),
})

export function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = ForgotPasswordSchema.safeParse(
            Object.fromEntries(formData),
        )

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
                `http://localhost:8787/v2/auth/generate-password-reset-token`,
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
                    description:
                        'If an account exists with that email, we will send a reset link.',
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
            description:
                'If an account exists with that email, we will send a reset link.',
        })
        setIsLoading(false)
    }

    return (
        <div className="w-[500px]">
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">
                            Reset my password
                        </CardTitle>
                        <CardDescription>
                            Forgot your password? Enter your email below and we
                            will send you a reset link.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="email@domain.com"
                                disabled={isLoading}
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
                            Send reset link
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
