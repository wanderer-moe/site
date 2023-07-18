import { Asset } from '@/interfaces/asset'

async function getData() {
    const res = await fetch('https://v2-api-testing.wanderer.moe/recent')
    const { results } = await res.json()
    return results
}

async function Home() {
    const data = await getData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <ul className="text-xl">
                    {data.map((item: Asset) => (
                        <li key={item.id}>- {item.name}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home
