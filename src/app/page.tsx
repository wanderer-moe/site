async function getData(params?: Props['SearchParams']) {
    const res = await fetch('https://v2-api-testing.wanderer.moe/search')
    const { results } = await res.json()
    return results
}

type Props = {
    SearchParams?: {
        query?: string
        game?: string
        assetType?: string
    }
}

async function Home() {
    const data = await getData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <ul className="text-xl">
                    {data.map((item: any, i: number) => (
                        <li key={item.id}>
                            {item.i} - {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home
