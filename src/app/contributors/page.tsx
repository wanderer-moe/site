import { Contributor } from '@/interfaces/discord/contributor'

async function getData(): Promise<Contributor[]> {
    const res = await fetch('https://api.wanderer.moe/discord/contributors')
    const { contributors } = await res.json()
    return contributors
}

async function Page() {
    const contributors = await getData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <ul className="text-xl">
                    {contributors.map((contributor: Contributor) => (
                        <li key={contributor.id}>{contributor.username}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Page
