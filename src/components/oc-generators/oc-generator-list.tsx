'use client'
import { OCGeneratorGameContainer } from '@/components/oc-generators/oc-generator-game-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { siteConfig } from '@/config/site'
import { Dices } from 'lucide-react'
import * as React from 'react'

async function fetchGamesData() {
    const res = await fetch(`${siteConfig.urls.api}/oc-generators`, {
        next: {
            revalidate: 5,
        },
    })
    const data = await res.json()
    return data.data
}

export function OCGeneratorList() {
    const [games, setGames] = React.useState<any>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        fetchGamesData().then((gamesResults) => {
            setGames(gamesResults)
            setLoading(false)
        })
    }, [])

    return (
        <div className="rounded-xl border bg-secondary/25">
            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                <Dices size={16} /> OC Generators
            </h1>
            <div className="p-4">
                {loading ? (
                    <SkeletonLoader displayFakes={2} />
                ) : (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {/* @ts-ignore fuck typing */}
                        {games.map((game) => (
                            <OCGeneratorGameContainer
                                key={game.name}
                                game={game.name}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
