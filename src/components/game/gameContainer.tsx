import Link from 'next/link'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function GameContainer(game: any) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Link href={`/search?game=${game.name}`}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div
                    className="relative flex h-32 items-center justify-center bg-cover text-white transition-all duration-150"
                    style={{
                        backgroundImage: `url(https://cdn.wanderer.moe/${game.name}/cover.png)`,
                        backgroundPosition: '50% 20%',
                        backgroundSize: hovered ? '115%' : '100%',
                    }}>
                    <div className="absolute inset-0 bg-black/70"></div>{' '}
                    <div className="align-center absolute">
                        <motion.p
                            className="text-center text-2xl font-bold text-white"
                            animate={{
                                opacity: hovered ? 1 : 1,
                                y: hovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.15 }}>
                            {mapGame(game.name)}
                        </motion.p>
                        <motion.p
                            className="text-center text-white"
                            animate={{
                                opacity: hovered ? 1 : 0,
                                y: hovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.15 }}>
                            {game.assetCategories.length}{' '}
                            {game.assetCategories.length === 1
                                ? 'category'
                                : 'categories'}{' '}
                            available
                        </motion.p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
