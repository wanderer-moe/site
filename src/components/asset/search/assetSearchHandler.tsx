// AssetSearchHandler.tsx

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { GameFilter } from '@/components/asset/search/gameFilter'
import { CategoryFilter } from '@/components/asset/search/categoryFilter'
import { Games, SearchParams } from '@/interfaces/params'
import { useEffect, useState } from 'react'

interface AssetSearchHandlerProps {
    games: Games[]
}

export function AssetSearchHandler({ games }: AssetSearchHandlerProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [selectedGames, setSelectedGames] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [query, setQuery] = useState<string>('')

    useEffect(() => {
        const game = searchParams.get('game')
        const query = searchParams.get('query')
        const asset = searchParams.get('asset')

        if (game) {
            setSelectedGames(game.split(','))
        }
        if (query) {
            setQuery(query)
        }
        if (asset) {
            setSelectedCategories(asset.split(','))
        }
    }, [searchParams])

    const handleGameChange = (name: string) => {
        if (selectedGames.includes(name)) {
            setSelectedGames(selectedGames.filter((n) => n !== name))
        } else {
            setSelectedGames([...selectedGames, name])
        }
    }

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category),
            )
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const clearSelectedGames = () => {
        setSelectedGames([])
    }

    const clearSelectedCategories = () => {
        setSelectedGames([])
    }

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const handleSearch = () => {
        console.log(selectedGames, query)
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

    const categories = [
        ...new Set(games.flatMap((game) => game.assetCategories)),
    ]

    return (
        <div>
            <div className="flex flex-row">
                <Input
                    type="text"
                    placeholder="Search for a file name"
                    value={query.replace(/-/g, ' ')}
                    onChange={handleQueryChange}
                />
                <Button className="ml-2" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="my-2 flex gap-2">
                <GameFilter
                    games={games}
                    selectedGames={selectedGames}
                    onGameChange={handleGameChange}
                    clearSelectedGames={clearSelectedGames}
                />
                <CategoryFilter
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                    clearSelectedCategories={clearSelectedCategories}
                />
            </div>
        </div>
    )
}
