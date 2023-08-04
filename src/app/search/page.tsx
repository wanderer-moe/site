'use client'

// TODO: cleanup
import AssetContainer from '@/components/asset/assetsContainer'
import { AssetSearchHandler } from '@/components/asset/search/assetSearchHandler'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'
import { Asset } from '@/interfaces/asset'
import { Games } from '@/interfaces/params'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SearchParams {
    game?: string
    query?: string
    asset?: string
}

function getGames() {
    return fetch(`https://v2-api-testing.wanderer.moe/games/all`, {
        next: {
            revalidate: 20,
        },
    })
        .then((res) => res.json())
        .then((data) =>
            data.results.map((game: Games) => ({
                ...game,
                asset_categories: [...new Set(game.asset_categories)],
            })),
        )
}

function getData(searchParams: SearchParams) {
    return fetch(
        `https://v2-api-testing.wanderer.moe/search/assets?${new URLSearchParams(
            searchParams as any,
        )}`,
    )
        .then((res) => res.json())
        .then((data) => data.results)
}

function SearchPage() {
    const searchParams = useSearchParams()!

    const [data, setData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [games, setGames] = useState<Games[]>([])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            Promise.all([
                getData(searchParams as SearchParams),
                getGames(),
            ]).then(([data, games]) => {
                setData(data)
                setGames(games)
                setLoading(false)
            })
        }, 100)
    }, [searchParams])

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="rounded-xl border bg-secondary/25 p-4">
                <AssetSearchHandler games={games} />
            </div>
            {loading ? (
                <div className="mt-5">
                    <SkeletonLoader />
                </div>
            ) : (
                <div className="mt-5">
                    {data.length !== 0 ? (
                        <AssetContainer assets={data} />
                    ) : (
                        <div className="mt-10 flex flex-col items-center justify-center">
                            <p>No results found.</p>
                        </div>
                    )}
                </div>
            )}
        </main>
    )
}

export default SearchPage
