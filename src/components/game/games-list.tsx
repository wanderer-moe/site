'use client'

import { Gamepad2 } from 'lucide-react'
import { Suspense, useEffect, useState } from 'react'
import { GameContainer } from '@/components/game/game-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { z } from 'zod'

import { APIClient } from '@/lib/api-client/client'
import type { get_V2gameall } from '@/lib/api-client/openapi'

export function GamesList() {
    const [games, setGames] = useState<z.infer<get_V2gameall['response']>>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        APIClient.get('/v2/game/all').then((res) => {
            setGames(res)
            setLoading(false)
        })
    }, [])

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
                            {games?.games.map((game) => (
                                <GameContainer key={game.id} game={game} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Suspense>
    )
}
