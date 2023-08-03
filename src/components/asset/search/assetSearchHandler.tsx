import { CategoryFilter } from '@/components/asset/search/categoryFilter'
import { GameFilter } from '@/components/asset/search/gameFilter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Games, SearchParams } from '@/interfaces/params'
import { X } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface AssetSearchHandlerProps {
    games: Games[]
}

export function AssetSearchHandler({ games }: AssetSearchHandlerProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    // ??????????????????
    const [selectedGames, setSelectedGames] = useState<string[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const game = searchParams.get('game')
        const query = searchParams.get('query')
        const asset = searchParams.get('asset')

        if (game) {
            const gamesToAdd = game.split(',').filter((g) => {
                return games.map((game) => game.name).includes(g)
            })
            setSelectedGames(gamesToAdd)
        }

        if (query) setQuery(query)

        if (asset) {
            const categoriesToAdd = asset.split(',').filter((a) => {
                return games.flatMap((game) => game.assetCategories).includes(a)
            })
            setSelectedCategories(categoriesToAdd)
        }
    }, [searchParams, games])

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
        setSelectedCategories([])
    }

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const clearAllFilters = () => {
        clearSelectedGames()
        clearSelectedCategories()
        setQuery('')
    }

    const handleSearch = () => {
        setLoading(true)
        console.log(selectedGames, query)
        const searchParams: SearchParams = {}
        if (selectedGames.length > 0)
            searchParams.game = selectedGames.join(',')
        if (selectedCategories.length > 0)
            searchParams.asset = selectedCategories.join(',')
        if (query) searchParams.query = query

        setLoading(false)
        router.push(`?${new URLSearchParams(searchParams as any)}`)
    }

    const categories = [
        ...new Set(games.flatMap((game) => game.assetCategories)),
    ]

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row">
                <Input
                    type="text"
                    className="h-10 rounded-md px-4"
                    placeholder="Search for a file name..."
                    value={query.replace(/-/g, ' ')}
                    onChange={handleQueryChange}
                />
                <Button size="lg" className="ml-2" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex flex-col gap-2 md:flex-row">
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
                <Button
                    variant="outline"
                    className="flex rounded-sm font-normal"
                    onClick={() => clearAllFilters()}>
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                </Button>
            </div>
        </div>
    )
}
