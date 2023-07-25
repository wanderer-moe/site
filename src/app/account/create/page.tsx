import Link from 'next/link'
import { CreateAccount } from '@/components/account/createAccount'
import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getSession } from '@/auth/getSession'

export function generateMetadata() {
    return {
        title: `Register - wanderer.moe`,
        description: `Register a new account`,
    }
}

const RegisterPage = async () => {
    const session = await getSession()
    if (session) redirect('/')
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <CreateAccount />
        </main>
    )
}

export default RegisterPage
