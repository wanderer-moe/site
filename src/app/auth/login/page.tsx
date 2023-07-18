import Link from 'next/link'

export function generateMetadata() {
    return {
        title: `Login - wanderer.moe`,
        description: `Login to account`,
    }
}

function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    )
}

export default LoginPage
