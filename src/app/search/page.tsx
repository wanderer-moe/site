'use client'

// TODO: cleanup
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Asset } from '@/interfaces/asset'
import { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { AssetItem } from '@/components/asset/assetItem'
import { Button } from '@/components/ui/button'
import { AssetSearchHandler } from '@/components/assetSearchHandler'

interface SearchParams {
    game?: string
    query?: string
    asset?: string
}

interface Games {
    name: string
    id: number
    assetCategories: string[]
}

function getGames() {
    return fetch(`https://v2-api-testing.wanderer.moe/games`, {
        next: {
            revalidate: 20,
        },
    })
        .then((res) => res.json())
        .then((data) =>
            data.results.map((game: Games) => ({
                ...game,
                assetCategories: [...new Set(game.assetCategories)],
            })),
        )
}

function getData(searchParams: SearchParams) {
    return fetch(
        `https://v2-api-testing.wanderer.moe/search?${new URLSearchParams(
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
        Promise.all([getData(searchParams as SearchParams), getGames()]).then(
            ([data, games]) => {
                setData(data)
                setGames(games)
                setLoading(false)
            },
        )
    }, [searchParams])

    return (
        <main className="min-h-screen p-4 md:p-12">
            <div>
                <AssetSearchHandler games={games} />
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2">
                    {data.map((item: Asset) => (
                        <AssetItem key={item.id} {...item} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default SearchPage
