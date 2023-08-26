import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React, { useState, useEffect, useMemo } from 'react'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LocaleChanger } from './localeChanger'
import { DiscordStatus } from '@/components/discord/discordStatus'
import type { Game } from '@/interfaces/params'
import {
    AssetCategoryLabel,
    GameContainer,
    GameLabel,
} from '@/components/game/gameContainer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { siteConfig } from '@/config/site'

export function SideBar() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu size={16} />
                        <span className="sr-only">Open Sidebar</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="z-[150] flex w-full flex-col bg-zinc-950/70 px-5 pt-16 backdrop-blur-lg backdrop-filter md:w-5/6">
                    <ScrollArea>
                        <GameCategorySideBar />
                        <div className="flex flex-col gap-1">
                            <LocaleChanger />
                            <DiscordStatus />
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}

function AssetCategoryFilter({ categories }: { categories: string[] }) {
    return (
        <div className="mt-4">
            <Label className="text-md font-semibold">
                Asset Categories ({categories.length})
            </Label>
            <div className="mt-2 flex flex-col gap-2">
                {categories.map((category, i) => (
                    <AssetCategoryLabel key={i} category={category} />
                ))}
            </div>
        </div>
    )
}

function GameSideBar({ games }: { games: Game[] }) {
    return (
        <div className="mt-4">
            <Label className="text-md font-semibold">
                Games ({games.length})
            </Label>
            <div className="mt-2 flex flex-col gap-2">
                {games.map((game) => (
                    <GameLabel key={game.id} game={game} className="ml-2" />
                ))}
            </div>
        </div>
    )
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

function GameCategorySideBar() {
    const [data, setData] = useState<Game[]>([])

    useEffect(() => {
        getGames().then((data) => setData(data))
    }, [])

    return (
        <div className="pb-6">
            <GameSideBar games={data} />
            <AssetCategoryFilter
                categories={[
                    ...new Set(data.flatMap((g) => g.asset_categories)),
                ]}
            />
        </div>
    )
}
