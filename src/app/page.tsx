'use client'

import { Asset } from '@/interfaces/asset'
import GameContainer from '@/components/game/gameContainer'
import { useCallback, useEffect, useState } from 'react'
import AssetContainer from '@/components/asset/assetsContainer'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'

async function getData() {
    const recentRes = await fetch(
        `https://v2-api-testing.wanderer.moe/recent`,
        {
            next: {
                revalidate: 10,
            },
        },
    )
    const recentData = await recentRes.json()
    const recentResults = recentData.results

    const gamesRes = await fetch(`https://v2-api-testing.wanderer.moe/games`, {
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
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            {loading ? (
                <div className="mt-10">
                    <SkeletonLoader />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {gamesData.map((game) => (
                            <GameContainer key={game.id} {...game} />
                        ))}
                    </div>
                    <div className="mt-8">
                        <h1 className="mb-6 text-center text-2xl font-bold">
                            Recently Uploaded Assets
                        </h1>
                        <AssetContainer assets={recentData} />
                    </div>
                </>
            )}
        </main>
    )
}

export default Home
