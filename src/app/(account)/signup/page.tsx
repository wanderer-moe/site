'use client'

import { CreateAccount } from '@/components/account/create-account'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'

export default function CreateAccountPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex items-center justify-center">
                {isLoadingSession ? <div>Loading...</div> : <CreateAccount />}
            </div>
        </div>
    )
}
