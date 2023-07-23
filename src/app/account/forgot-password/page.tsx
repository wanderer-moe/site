import Link from 'next/link'
import { ForgotPassword } from '@/components/account/forgotPassword'
import { getSession } from '@/auth/getSession'
import { redirect } from 'next/navigation'

export function generateMetadata() {
    return {
        title: `Forgot password - wanderer.moe`,
        description: `Login to account`,
    }
}

const ForgotPasswordPage = async () => {
    const session = await getSession()
    if (session) redirect('/')
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <ForgotPassword />
        </main>
    )
}

export default ForgotPasswordPage
