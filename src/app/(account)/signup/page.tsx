'use client'

import { CreateAccount } from '@/components/account/createAccount'
import { useAuthContext } from '@/context/authContext'
import { redirect } from 'next/navigation'

export default function CreateAccountPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="m-auto min-h-screen max-w-screen-xl p-5">
            {isLoadingSession ? <div>Loading...</div> : <CreateAccount />}
        </div>
    )
}
