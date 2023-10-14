'use client'
import { ForgotPassword } from '@/components/account/forgot-password'
import Background from '@/components/background/background'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'

export default function ForgotPasswordPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (session) {
        return redirect('/')
    }

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <Background>
                <div className="flex min-h-screen flex-row items-center justify-center">
                    {isLoadingSession ? (
                        <div>Loading...</div>
                    ) : (
                        <ForgotPassword />
                    )}
                </div>
            </Background>
        </div>
    )
}
