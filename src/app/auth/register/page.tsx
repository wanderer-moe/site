import Link from 'next/link'

export function generateMetadata() {
    return {
        title: `Register - wanderer.moe`,
        description: `Register a new account`,
    }
}

function RegisterPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    )
}

export default RegisterPage
