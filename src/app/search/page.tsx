'use client'

import AssetContainer from '@/components/asset/assetsContainer'
import { DynamicAssetSearchHandler } from '@/components/asset/search/assetSearchHandler'
import { SkeletonLoader } from '@/components/placeholders/skeletonLoader'
import { Asset } from '@/interfaces/asset'
import { Game } from '@/interfaces/params'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGetGames } from '@/hooks/useGetGames'

interface SearchParams {
    game?: string
    query?: string
    asset?: string
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
    const [games, setGames] = useState<Game[]>([])

    const gamesData = useGetGames()

    useEffect(() => {
        setLoading(true)
        Promise.all([getData(searchParams as SearchParams), gamesData]).then(
            ([data, games]) => {
                setData(data)
                setGames(games)
                setLoading(false)
            },
        )
    }, [searchParams, gamesData])

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
