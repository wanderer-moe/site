'use client'

import { Asset } from '@/interfaces/asset'
import AssetItem from '@/components/asset/assetItem'
import GameContainer from '@/components/game/gameContainer'
import { useCallback, useEffect, useState } from 'react'

async function getData() {
    const recentRes = await fetch(
        'https://v2-api-testing.wanderer.moe/recent',
        {
            next: {
                revalidate: 10,
            },
        },
    )
    const recentData = await recentRes.json()
    const recentResults = recentData.results

    const gamesRes = await fetch('https://v2-api-testing.wanderer.moe/games', {
        next: {
            revalidate: 10,
        },
    })
    const gamesData = await gamesRes.json()
    const gamesResults = gamesData.results

    return { recentResults, gamesResults }
}

function Home() {
    const [recentData, setrecentData] = useState<Asset[]>([])
    const [gamesData, setGamesData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getData().then(({ recentResults, gamesResults }) => {
            setrecentData(recentResults)
            setGamesData(gamesResults)
            setLoading(false)
        })
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl font-bold">Games</h1>
                    {gamesData.map((game) => (
                        <GameContainer key={game.id} {...game} />
                    ))}
                    <h1 className="mt-3 text-xl font-bold">
                        Recently Uploaded Assets
                    </h1>
                    {recentData.map((item: Asset) => (
                        <AssetItem key={item.id} {...item} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Home
