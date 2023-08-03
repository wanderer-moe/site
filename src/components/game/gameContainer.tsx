import { mapGame } from '@/lib/helpers/casing/mapping'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function GameContainer(game: any) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Link href={`/search?game=${game.name}`}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <motion.div
                    className="relative flex h-32 items-center justify-center bg-cover text-white"
                    style={{
                        backgroundImage: `url(https://cdn.wanderer.moe/${game.name}/cover.png)`,
                        backgroundPosition: '50% 20%',
                        backgroundSize: '100%',
                    }}
                    animate={{
                        // idk about this, will probably change
                        backgroundSize: hovered ? '115%' : '100%',
                        backgroundPosition: hovered ? '50% 15%' : '50% 20%',
                    }}
                    transition={{ duration: 0.15 }}>
                    <motion.div
                        className="absolute h-full w-full bg-black bg-opacity-60"
                        animate={{
                            opacity: hovered ? 0.9 : 1,
                        }}
                        transition={{ duration: 0.15 }}
                    />
                    <div className="align-center absolute w-5/6">
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
                </motion.div>
            </div>
        </Link>
    )
}
