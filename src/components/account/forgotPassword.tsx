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

export function ForgotPassword() {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Reset my password</CardTitle>
                <CardDescription>
                    Forgot your password? Enter your email and if there&apos;s
                    an account with that email we&apos;ll send a link your way
                    to reset your password.
                    <Separator className="my-4" />
                    <Link href="/account/login" passHref className="text-white">
                        Login Instead
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
            </CardContent>
            <CardFooter>
                <Button className="w-full">Reset</Button>
            </CardFooter>
        </Card>
    )
}
