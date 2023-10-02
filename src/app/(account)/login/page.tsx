'use client'

import { Login } from '@/components/account/login'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'
import Background from '@/components/background/background'

export default function LoginPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <Background>
                <div className="flex min-h-screen flex-row items-center justify-center">
                    {isLoadingSession ? <div>Loading...</div> : <Login />}
                </div>
            </Background>
        </div>
    )
}
