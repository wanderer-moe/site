'use client'

import { CreateAccount } from '@/components/account/create-account'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'
import Background from '@/components/background/background'

export default function CreateAccountPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="mx-auto -mt-14 min-h-screen max-w-screen-xl px-5">
            <Background>
                <div className="flex min-h-screen flex-row items-center justify-center">
                    {isLoadingSession ? (
                        <div>Loading...</div>
                    ) : (
                        <CreateAccount />
                    )}
                </div>
            </Background>
        </div>
    )
}
