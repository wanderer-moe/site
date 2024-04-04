'use client'
import { UpdateNewPaswsord } from '@/components/account/update-new-password'
import Background from '@/components/background/background'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'

export default function ForgotPasswordPage() {
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
                        <UpdateNewPaswsord />
                    )}
                </div>
            </Background>
        </div>
    )
}
