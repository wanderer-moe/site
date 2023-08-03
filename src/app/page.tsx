'use client'

import AssetContainer from '@/components/asset/assetsContainer'
import GameContainer from '@/components/game/gameContainer'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'
import { Asset } from '@/interfaces/asset'
import { FilePlus2, Gamepad2 } from 'lucide-react'
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
                    <div className="rounded-xl border bg-secondary/25">
                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                            <Gamepad2 size={16} /> Games List
                        </h1>
                        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                            {gamesData.map((game) => (
                                <GameContainer key={game.id} {...game} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="rounded-xl border bg-secondary/25">
                            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                <FilePlus2 size={16} /> Newest Assets
                            </h1>
                            <div className="p-4">
                                <AssetContainer
                                    assets={recentData}
                                    displayCounter={false}
                                />
                            </div>
                            <div className="flex justify-center">
                                <Link href="/search">
                                    <Button variant="default" className="mb-4">
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
