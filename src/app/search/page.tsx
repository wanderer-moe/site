'use client'

import AssetContainer from '@/components/asset/assets-container'
import { DynamicAssetSearchHandler } from '@/components/asset/search/asset-search-handler'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Asset } from '@/interfaces/asset/asset'
import { Game } from '@/interfaces/params'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'

interface SearchParams {
    game?: string
    query?: string
    asset?: string
}

function getData(searchParams: SearchParams) {
    return fetch(
        `${siteConfig.urls.api}/search/assets?${new URLSearchParams(
            searchParams as any,
        )}`,
    )
        .then((res) => res.json())
        .then((data) => data.results)
}

function getGames() {
    return fetch(`${siteConfig.urls.api}/games/all`, {
        next: {
            revalidate: 5,
        },
    })
        .then((res) => res.json())
        .then((data) =>
            data.results.map((game: Game) => ({
                ...game,
                asset_categories: [...new Set(game.asset_categories)],
            })),
        )
}

function SearchPage() {
    const searchParams = useSearchParams()!

    const [data, setData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        setLoading(true)
        Promise.all([getData(searchParams as SearchParams), getGames()]).then(
            ([data, games]) => {
                setData(data)
                setGames(games)
                setLoading(false)
            },
        )
    }, [searchParams])

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-y-10">
                <DynamicAssetSearchHandler games={games} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <>
                        {data.length !== 0 ? (
                            <AssetContainer assets={data} />
                        ) : (
                            <div className="mt-10 flex flex-col items-center justify-center">
                                <p>No results found.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default SearchPage
