'use client'

import { Login } from '@/components/account/login'
import { useAuthContext } from '@/context/authContext'
import { redirect } from 'next/navigation'

export default function LoginPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="m-auto min-h-screen max-w-screen-xl p-5">
            {isLoadingSession ? <div>Loading...</div> : <Login />}
        </div>
    )
}
