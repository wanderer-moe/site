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
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

export function CreateAccount() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        console.log(formData)
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                        Create your account
                    </CardTitle>
                    <CardDescription>
                        Enter a username, email, and password to create your
                        account.
                        <Button
                            className="mt-4 w-full"
                            variant="outline"
                            disabled>
                            <DiscordLogoIcon className="mr-2 h-4 w-4" />
                            Login through Discord
                        </Button>
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
                            placeholder="username"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            disabled={isLoading}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@domain.com"
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
                    <div className="flex items-center space-x-2">
                        <Checkbox id="confirm" />
                        <Label htmlFor="confirm">
                            I confirm I have read and agree to the{' '}
                            <Link href="/legal/terms-of-service">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link href="/legal/privacy-policy">
                                Privacy Policy
                            </Link>{' '}
                            and that I am over the age of 13.
                        </Label>
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
                </CardFooter>
            </Card>
        </form>
    )
}
