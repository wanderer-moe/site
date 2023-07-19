'use client'

import Link from 'next/link'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'

export default function GameContainer(game: any) {
    return (
        <div>
            <Link href={`/search?game=${game.name}`}>
                <p className="">{mapGame(game.name)}</p>
            </Link>
        </div>
    )
}
