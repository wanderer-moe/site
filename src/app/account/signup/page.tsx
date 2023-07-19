import Link from 'next/link'
import { CreateAccount } from '@/components/account/createAccount'

export function generateMetadata() {
    return {
        title: `Register - wanderer.moe`,
        description: `Register a new account`,
    }
}

function RegisterPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <div className="flex flex-col items-center justify-center">
                <CreateAccount />
            </div>
        </main>
    )
}

export default RegisterPage
