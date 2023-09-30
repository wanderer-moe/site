'use client'
import { GameContainer } from '@/components/game/game-container'
import { FilePlus2, Gamepad2 } from 'lucide-react'
import * as React from 'react'
import type { Game } from '@/interfaces/params'
import { siteConfig } from '@/config/site'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'

async function fetchGamesData() {
    const res = await fetch(`${siteConfig.urls.api}/games/all`, {
        next: {
            revalidate: 5,
        },
    })
    const data = await res.json()
    return data.results
}

export function GamesList() {
    const [games, setGames] = React.useState<Game[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        fetchGamesData().then((gamesResults) => {
            setGames(gamesResults)
            setLoading(false)
        })
    }, [])

    return (
        <React.Suspense fallback={<SkeletonLoader />}>
            <div className="rounded-xl border bg-secondary/25">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    <Gamepad2 size={16} /> Games List
                </h1>
                {loading ? (
                    <div className="p-4">
                        <SkeletonLoader displayFakes={2} />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-5">
                        {games.map((game) => (
                            <GameContainer key={game.id} game={game} />
                        ))}
                    </div>
                )}
            </div>
        </React.Suspense>
    )
}
