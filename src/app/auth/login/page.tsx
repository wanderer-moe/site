import Link from 'next/link'
import { Login } from '@/components/account/login'

export function generateMetadata() {
    return {
        title: `Login - wanderer.moe`,
        description: `Login to account`,
    }
}

function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <div className="flex flex-col items-center justify-center">
                <Login />
            </div>
        </main>
    )
}

export default LoginPage
