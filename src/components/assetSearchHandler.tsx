import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

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

export function AssetSearchHandler({ games }: { games: Games[] }) {
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
