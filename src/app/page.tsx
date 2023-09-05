'use client'

import AssetContainer from '@/components/asset/assets-container'
import { GameContainer } from '@/components/game/game-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Asset } from '@/interfaces/asset/asset'
import { FilePlus2, Gamepad2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Game } from '@/interfaces/params'
import { siteConfig } from '@/config/site'

async function fetchRecentData() {
    const res = await fetch(`${siteConfig.urls.api}/search/assets/recent`, {
        next: {
            revalidate: 5,
        },
    })
    const data = await res.json()
    return data.results
}

async function fetchGamesData() {
    const res = await fetch(`${siteConfig.urls.api}/games/all`, {
        next: {
            revalidate: 5,
        },
    })
    const data = await res.json()
    return data.results
}

function IndexPage() {
    const [recentData, setRecentData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        setLoading(true)
        Promise.all([fetchRecentData(), fetchGamesData()]).then(
            ([recentResults, gamesResults]) => {
                setRecentData(recentResults)
                setGames(gamesResults)
                setLoading(false)
            },
        )
    }, [])

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            {loading ? (
                <div className="mt-10">
                    <SkeletonLoader />
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-y-10">
                        <div className="rounded-xl border bg-secondary/25">
                            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                <Gamepad2 size={16} /> Games List
                            </h1>
                            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                                {games.map((game) => (
                                    <GameContainer key={game.id} game={game} />
                                ))}
                            </div>
                        </div>
                        <div>
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
                                        <Button
                                            variant="default"
                                            className="mb-4">
                                            View All Assets
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default IndexPage
