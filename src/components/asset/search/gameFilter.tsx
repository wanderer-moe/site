import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { SearchParams, Games } from '@/interfaces/params'

interface GameFilterProps {
    games: Games[]
    selectedGames: string[]
    onGameChange: (name: string) => void
}

export function GameFilter({
    games,
    selectedGames,
    onGameChange,
}: GameFilterProps) {
    return (
        <div className="flex flex-row">
            {games.map((game) => (
                <div key={game.name} className="text-xs">
                    <Input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={selectedGames.includes(game.name)}
                        onChange={() => onGameChange(game.name)}
                    />
                    <label className="ml-2">{game.name}</label>
                </div>
            ))}
        </div>
    )
}
