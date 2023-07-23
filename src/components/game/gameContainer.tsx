import Link from 'next/link'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'
import { useState } from 'react'

export default function GameContainer(game: any) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Link href={`/search?game=${game.name}`}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div
                    className="relative flex h-32 items-center justify-center bg-cover text-white transition-all duration-150 ease-in-out"
                    style={{
                        backgroundImage: `url(https://cdn.wanderer.moe/${game.name}/cover.png)`,
                        backgroundPosition: '50% 20%',
                        backgroundSize: hovered ? '105%' : '100%',
                    }}>
                    <div className="absolute inset-0 bg-black/70"></div>{' '}
                    <div className="align-center absolute">
                        <p className="text-center text-2xl font-bold text-white">
                            {mapGame(game.name)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
