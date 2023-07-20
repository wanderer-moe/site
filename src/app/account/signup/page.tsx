import Link from 'next/link'
import { CreateAccount } from '@/components/account/createAccount'
import { auth } from '@/auth/lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export function generateMetadata() {
    return {
        title: `Register - wanderer.moe`,
        description: `Register a new account`,
    }
}

const RegisterPage = async () => {
    const authRequest = auth.handleRequest({
        request: null,
        cookies,
    })
    const session = await authRequest.validate()
    if (session) redirect('/')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <div className="flex flex-col items-center justify-center">
                <CreateAccount />
            </div>
        </main>
    )
}

export default RegisterPage
