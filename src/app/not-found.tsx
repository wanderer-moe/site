import { GoBackButton } from '@/components/layouts/nav/go-back'
import * as React from 'react'
import Background from '@/components/background/background'

export default function NotFoundPage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <Background>
                <div className="flex min-h-screen flex-row items-center justify-center">
                    <div className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-2xl font-bold">
                                <span className="rounded-lg bg-white px-2 text-[#09090B]">
                                    404
                                </span>{' '}
                                Page Not Found
                            </h1>
                            <p className="text-lg">
                                The page you are looking for does not exist or
                                has been removed.
                            </p>
                            <GoBackButton />
                        </div>
                    </div>
                </div>
            </Background>
        </div>
    )
}
