import Link from 'next/link'
import { ForgotPassword } from '@/components/account/forgotPassword'

export function generateMetadata() {
    return {
        title: `Forgot password - wanderer.moe`,
        description: `Login to account`,
    }
}

function ForgotPasswordPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <div className="flex flex-col items-center justify-center">
                <ForgotPassword />
            </div>
        </main>
    )
}

export default ForgotPasswordPage
