'use client'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'

export default function ForgotPasswordPage() {
    const { isLoadingSession, session } = useAuthContext()

    if (!session) {
        return redirect('/')
    }

    return <p>testing</p>
}
