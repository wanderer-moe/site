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
    const [query, setQuery] = useState<string>('')

    useEffect(() => {
        const game = searchParams.get('game')
        const query = searchParams.get('query')

        if (game) {
            setSelectedGames(game.split(','))
        }
        if (query) {
            setQuery(query)
        }
    }, [searchParams])

    const handleGameChange = (name: string) => {
        if (selectedGames.includes(name)) {
            setSelectedGames(selectedGames.filter((n) => n !== name))
        } else {
            setSelectedGames([...selectedGames, name])
        }
    }

    const clearSelectedGames = () => {
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
                    placeholder="Search for a file name"
                    value={query.replace(/-/g, ' ')}
                    onChange={handleQueryChange}
                />
                <Button className="ml-2" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className="my-2">
                <GameFilter
                    games={games}
                    selectedGames={selectedGames}
                    onGameChange={handleGameChange}
                    clearSelectedGames={clearSelectedGames}
                />
                <CategoryFilter games={games} />
            </div>
        </div>
    )
}
