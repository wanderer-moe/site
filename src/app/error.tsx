'use client'

import { useEffect } from 'react'
import { GoBackButton } from '@/components/layouts/nav/go-back'
import { TryAgainButton } from '@/components/layouts/nav/try-again'
import Background from '@/components/background/background'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="mx-auto -mt-14 min-h-screen max-w-screen-xl px-5">
            <Background>
                <div className="flex min-h-screen flex-row items-center justify-center">
                    <div className="flex flex-col gap-y-10">
                        <div className="z-20 flex flex-col items-center justify-center gap-y-2 text-center">
                            <h1 className="text-2xl font-bold">
                                <span className="rounded-lg bg-white px-2 text-[#09090B]">
                                    500
                                </span>{' '}
                                Internal Server Error
                            </h1>
                            <p className="text-lg">
                                Something went wrong. Please try again later.
                            </p>
                            <div className="flex flex-row gap-2">
                                <GoBackButton />
                                <TryAgainButton reset={reset} />
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </div>
    )
}
