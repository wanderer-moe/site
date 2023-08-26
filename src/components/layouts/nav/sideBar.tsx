import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LocaleChanger } from './localeChanger'
import { DiscordStatus } from '@/components/discord/discordStatus'
import { getGames } from '@/app/search/page'
import type { Game } from '@/interfaces/params'
import { GameContainer, GameLabel } from '@/components/game/gameContainer'

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
                <SheetContent className="z-[150] flex w-5/6 flex-col bg-zinc-950/70 px-5 pt-16 backdrop-blur-lg backdrop-filter">
                    <GamesSideBar />
                    <div className="flex flex-col gap-1">
                        <LocaleChanger />
                        <DiscordStatus />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

function GamesSideBar() {
    const [data, setData] = useState<Game[]>([])

    useEffect(() => {
        getGames().then((data) => setData(data))
    }, [])

    return (
        <div className="flex flex-col gap-2">
            {data.map((game) => (
                <GameLabel key={game.id} game={game} />
            ))}
        </div>
    )
}
