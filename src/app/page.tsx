'use client'

import AssetContainer from '@/components/asset/assetsContainer'
import GameContainer from '@/components/game/gameContainer'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'
import { Asset } from '@/interfaces/asset'
import { FilePlus2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
                    <div className="mt-10">
                        <div className="rounded-xl border bg-secondary/25 p-4">
                            <h1 className="mb-4 flex items-center justify-center gap-2 text-lg font-bold">
                                <FilePlus2 strokeWidth={3} size={20} /> Newest
                                Assets
                            </h1>
                            <AssetContainer
                                assets={recentData}
                                displayCounter={false}
                            />
                            <div className="flex justify-center">
                                <Link href="/search">
                                    <Button variant="default" className="mt-4">
                                        View All Assets
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}

export default Home
