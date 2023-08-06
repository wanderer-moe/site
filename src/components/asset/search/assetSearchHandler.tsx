import { CategoryFilter } from '@/components/asset/search/categoryFilter'
import { GameFilter } from '@/components/asset/search/gameFilter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Game, SearchParams } from '@/interfaces/params'
import { X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo, useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { SkeletonLoader } from '@/components/placeholders/skeletonLoader'
interface AssetSearchHandlerProps {
    games: Game[]
    showGames?: boolean
    showCategories?: boolean
}

export const DynamicAssetSearchHandler = dynamic(
    () => Promise.resolve(AssetSearchHandler),
    {
        ssr: false,
        loading: () => <SkeletonLoader displayFakes={1} gridCols={1} />,
    },
)

export function AssetSearchHandler({
    games,
    showGames = true,
    showCategories = true,
}: AssetSearchHandlerProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    console.log(showCategories, showGames)

    const [selectedFilters, setSelectedFilters] = useState<{
        games: string[]
        categories: string[]
        query: string
    }>({
        games: [],
        categories: [],
        query: '',
    })

    useEffect(() => {
        const game = searchParams.get('game')
        const query = searchParams.get('query')
        const asset = searchParams.get('asset')

        if (game) {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                games: game.split(','),
            }))
        }

        if (query) {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                query: query,
            }))
        }

        if (asset) {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                categories: asset.split(','),
            }))
        }
    }, [searchParams, setSelectedFilters])

    const handleGameChange = useCallback(
        (name: string) => {
            setSelectedFilters((prevFilters) => {
                if (prevFilters.games.includes(name)) {
                    return {
                        ...prevFilters,
                        games: prevFilters.games.filter((n) => n !== name),
                    }
                } else {
                    return {
                        ...prevFilters,
                        games: [...prevFilters.games, name],
                    }
                }
            })
        },
        [setSelectedFilters],
    )

    const handleCategoryChange = useCallback(
        (category: string) => {
            setSelectedFilters((prevFilters) => {
                if (prevFilters.categories.includes(category)) {
                    return {
                        ...prevFilters,
                        categories: prevFilters.categories.filter(
                            (c) => c !== category,
                        ),
                    }
                } else {
                    return {
                        ...prevFilters,
                        categories: [...prevFilters.categories, category],
                    }
                }
            })
        },
        [setSelectedFilters],
    )

    const handleQueryChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                query: event.target.value,
            }))
        },
        [setSelectedFilters],
    )

    const clearAllFilters = useCallback(() => {
        setSelectedFilters({
            games: [],
            categories: [],
            query: '',
        })
    }, [setSelectedFilters])

    const handleSearch = useCallback(() => {
        const searchParams: SearchParams = {}
        if (selectedFilters.games.length > 0)
            searchParams.game = selectedFilters.games.join(',')
        if (selectedFilters.categories.length > 0)
            searchParams.asset = selectedFilters.categories.join(',')
        if (selectedFilters.query) searchParams.query = selectedFilters.query

        router.push(
            `/search/assets?${new URLSearchParams(searchParams as any)}`,
        )
    }, [router, selectedFilters])

    const categories = useMemo(
        () => [...new Set(games.flatMap((game) => game.asset_categories))],
        [games],
    )

    const totalAssets = useMemo(() => {
        return games.reduce((acc, game) => {
            return acc + game.asset_count
        }, 0)
    }, [games])

    return (
        <div className="rounded-xl border bg-secondary/25">
            {/* <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                <Search size={16} /> Search {totalAssets} Available Assets
            </h1> */}
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row">
                        <Input
                            type="text"
                            className="h-10 rounded-md px-4"
                            placeholder="Search for a file name..."
                            value={selectedFilters.query.replace(/-/g, ' ')}
                            onChange={handleQueryChange}
                        />
                        <Button
                            size="lg"
                            className="ml-2"
                            onClick={handleSearch}>
                            <Search size={16} className="mr-2" />
                            Search
                        </Button>
                    </div>
                    {showCategories || showGames ? (
                        <div className="flex flex-col gap-2 md:flex-row">
                            {showGames && (
                                <GameFilter
                                    games={games}
                                    selectedGames={selectedFilters.games}
                                    onGameChange={handleGameChange}
                                />
                            )}
                            {showCategories && (
                                <CategoryFilter
                                    categories={categories}
                                    selectedCategories={
                                        selectedFilters.categories
                                    }
                                    onCategoryChange={handleCategoryChange}
                                />
                            )}
                            {showCategories || showGames ? (
                                <Button
                                    variant="outline"
                                    className="flex rounded-sm font-normal"
                                    onClick={clearAllFilters}>
                                    <X className="mr-2 h-4 w-4" />
                                    Clear Filters
                                </Button>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
