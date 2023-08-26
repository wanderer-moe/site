/* eslint-disable @next/next/no-img-element */
import { Game } from '@/interfaces/params'
import { mapAssetType, mapGame } from '@/lib/helpers/casing/mapping'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { timeAgo } from '@/lib/helpers/time'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

interface GameContainerProps {
    game: Game
    className?: string
}

interface CategoryContainerProps {
    category: string
    className?: string
}

export function GameContainer({ game, className }: GameContainerProps) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className={cn(className)}>
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
                                    {game.asset_count === 1
                                        ? 'asset'
                                        : 'assets'}{' '}
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
        </div>
    )
}

export function GameLabel({ game, className }: GameContainerProps) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Link href={`/search?game=${game.name}`}>
            <motion.div
                animate={{
                    x: hovered ? 5 : 0,
                }}
                transition={{ duration: 0.15 }}
                className={cn(
                    'flex cursor-pointer flex-row items-center gap-1',
                    className,
                )}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <img
                    src={`https://files.wanderer.moe/assets/${game.name}/icon.png`}
                    alt={game.name}
                    className="h-5 w-5 rounded-md"
                />
                <div>
                    <Label className="ml-2 cursor-pointer text-xs font-normal">
                        {mapGame(game.name)}
                    </Label>
                </div>
            </motion.div>
        </Link>
    )
}

export function AssetCategoryLabel({
    category,
    className,
}: CategoryContainerProps) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Link href={`/search?asset=${category}`}>
            <motion.div
                animate={{
                    x: hovered ? 5 : 0,
                }}
                transition={{ duration: 0.15 }}
                className={cn(
                    'flex cursor-pointer flex-row items-center gap-1',
                    className,
                )}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div>
                    <Label className="ml-2 cursor-pointer text-xs font-normal">
                        {mapAssetType(category)}
                    </Label>
                </div>
            </motion.div>
        </Link>
    )
}
