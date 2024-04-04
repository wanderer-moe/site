'use client'
import { LogIn, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuthContext, logoutUser } from '@/context/auth-context'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import * as React from 'react'

export function SessionSideBar() {
    const { isLoadingSession, session } = useAuthContext()

    return (
        <div className="flex flex-col gap-2">
            {isLoadingSession && <SkeletonLoader />}
            {!session?.session ? (
                <React.Fragment>
                    <Link href="/login" className="w-full transition-colors">
                        <Button
                            variant="ghost"
                            className="flex w-full flex-row items-center justify-start gap-2">
                            <LogIn className="h-4 w-4" />
                            <p className="cursor-pointer text-white">Login</p>
                        </Button>
                    </Link>
                    <Link href="/signup" className="w-full transition-colors">
                        <Button
                            variant="ghost"
                            className="flex w-full flex-row items-center justify-start gap-2">
                            <LogIn className="h-4 w-4" />
                            <p className="cursor-pointer text-white">
                                Create Account
                            </p>
                        </Button>
                    </Link>
                </React.Fragment>
            ) : (
                <>
                    <Link
                        href="/account/profile"
                        className="w-full transition-colors">
                        <Button
                            className="flex w-full flex-row items-center justify-start gap-2"
                            variant="ghost">
                            {session.user.username}
                        </Button>
                    </Link>
                    <Button
                        onClick={() => logoutUser()}
                        variant="ghost"
                        className="flex w-full flex-row items-center justify-start gap-2">
                        <LogOut className="h-4 w-4" />
                        <p className="cursor-pointer text-white">Logout</p>
                    </Button>
                </>
            )}
        </div>
    )
}
