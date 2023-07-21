import Link from 'next/link'
import { Login } from '@/components/account/login'
import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getSession } from '@/auth/getSession'

export function generateMetadata() {
    return {
        title: `Login - wanderer.moe`,
        description: `Login to account`,
    }
}

const LoginPage = async () => {
    const session = await getSession()
    if (session) redirect('/')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <div className="flex flex-col items-center justify-center">
                <Login />
            </div>
        </main>
    )
}

export default LoginPage
