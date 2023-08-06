import { Game } from '@/interfaces/params'
import { mapGame } from '@/lib/helpers/casing/mapping'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { timeAgo } from '@/lib/helpers/time'
import { useState } from 'react'

export default function GameContainer(game: Game) {
    const [hovered, setHovered] = useState<boolean>(false)
    console.log(game)

    return (
        <Link href={`/search?game=${game.name}`}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <motion.div
                    className="relative flex h-32 items-center justify-center bg-cover text-white"
                    style={{
                        backgroundImage: `url(https://files.wanderer.moe/assets/${game.name}/cover.png)`,
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
                        <motion.div
                            animate={{
                                opacity: hovered ? 1 : 1,
                                y: hovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.15 }}>
                            <p className="text-center text-2xl font-bold text-white">
                                {mapGame(game.name)}
                            </p>
                            <p className="text-center text-sm font-normal text-white">
                                {game.asset_count}{' '}
                                {game.asset_count === 1 ? 'asset' : 'assets'}{' '}
                                available
                            </p>
                        </motion.div>
                        <motion.p
                            className="text-center text-xs font-normal text-white"
                            animate={{
                                opacity: hovered ? 1 : 0,
                                y: hovered ? 0 : 10,
                            }}
                            transition={{ duration: 0.15 }}>
                            Last updated {timeAgo(game.last_updated)}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </Link>
    )
}
