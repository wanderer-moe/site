import { Contributor } from '@/interfaces/discord/contributor'

async function getData(): Promise<Contributor[]> {
    const res = await fetch('https://api.wanderer.moe/discord/contributors')
    const { contributors } = await res.json()
    return contributors
}

async function Page() {
    const contributors = await getData()

    return (
        <main className="min-h-screen p-5 md:px-16 lg:px-36">
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
