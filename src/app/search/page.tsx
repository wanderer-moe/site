'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Asset } from '@/interfaces/asset'
import { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { AssetItem } from '@/components/asset/assetitem'
import { Button } from '@/components/ui/button'

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
            revalidate: 10,
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

function AssetSearchHandler({ games }: { games: Games[] }) {
    const router = useRouter()

    const categories = [
        ...new Set(games.flatMap((game) => game.assetCategories)),
    ]

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedGames, setSelectedGames] = useState<string[]>([])
    const [query, setQuery] = useState<string>('')

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category),
            )
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const handleGameChange = (name: string) => {
        if (selectedGames.includes(name)) {
            setSelectedGames(selectedGames.filter((n) => n !== name))
        } else {
            setSelectedGames([...selectedGames, name])
        }
    }

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const handleSearch = () => {
        console.log(selectedCategories, selectedGames, query)
        const searchParams: SearchParams = {}
        if (selectedGames.length > 0) {
            searchParams.game = selectedGames.join(',')
        }
        if (selectedCategories.length > 0) {
            searchParams.asset = selectedCategories.join(',')
        }
        if (query) {
            searchParams.query = query
        }
        router.push(`?${new URLSearchParams(searchParams as any)}`)
    }

    return (
        <div>
            <div className="flex flex-row">
                <Input
                    type="text"
                    placeholder="Name"
                    onChange={handleQueryChange}
                />
                <Button className="ml-2" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="flex flex-row">
                {games.map((game: Games) => (
                    <div key={game.name} className="text-xs">
                        <Input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={selectedGames.includes(game.name)}
                            onChange={() => handleGameChange(game.name)}
                        />
                        <label className="ml-2">{game.name}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-row">
                {categories.map((category) => (
                    <div key={category} className="text-xs">
                        <Input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        <label className="ml-2">{category}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

function SearchPage() {
    const router = useRouter()
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
