'use client'

import { Gamepad2 } from 'lucide-react'
import { Suspense, useEffect, useState } from 'react'
import { GameContainer } from '@/components/game/game-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { siteConfig } from '@/config/site'
import { arbitraryGameSort } from '@/lib/helpers/casing/mapping'
import type { Game } from '@/interfaces/params'

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
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const sortGames = (games: Game[]): Game[] => {
        return [...games].sort((a, b) => {
            const orderA = arbitraryGameSort[a.name] || Infinity
            const orderB = arbitraryGameSort[b.name] || Infinity
            return orderA - orderB
        })
    }

    useEffect(() => {
        fetchGamesData().then((gamesResults) => {
            setGames(gamesResults)
            setLoading(false)
        })
    }, [])

    const sortedGames = sortGames(games)

    return (
        <Suspense fallback={<SkeletonLoader />}>
            <div className="rounded-xl border bg-secondary-dark">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    <Gamepad2 size={16} /> Games List
                </h1>
                <div className="p-4">
                    {loading ? (
                        <SkeletonLoader
                            displayFakes={11}
                            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
                            skeletonClassName="h-28"
                        />
                    ) : (
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {sortedGames.map((game) => (
                                <GameContainer key={game.id} game={game} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Suspense>
    )
}
