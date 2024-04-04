/* eslint-disable @next/next/no-img-element */
import { mapAssetType, mapGame } from '@/lib/helpers/casing/mapping'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { timeAgo } from '@/lib/helpers/time'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { Label } from '@/components/ui/label'
import { z } from 'zod'
import { type get_V2gameId } from '@/lib/api-client/openapi'

type GameResponse = z.infer<get_V2gameId['response']>
type Game = Pick<GameResponse, 'game'>['game']

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
                    onTouchCancel={() => setHovered(false)}
                    onTouchEnd={() => setHovered(false)}
                    onTouchStart={() => setHovered(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <motion.div
                        className="relative flex h-24 items-center justify-center rounded-md sm:h-28"
                        style={{
                            backgroundImage: `url(${siteConfig.urls.cdn}/game/${game.name}/cover.png)`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        animate={{
                            backgroundPosition: hovered ? '50% 10%' : '50% 20%',
                        }}
                        transition={{ duration: 0.15 }}>
                        <div
                            className={`absolute h-full w-full rounded-md bg-black bg-opacity-25 transition-all `}
                        />
                        <div
                            className={`absolute h-full w-full rounded-md transition-all ${
                                hovered
                                    ? 'bg-black bg-opacity-25 ring-2 ring-ring'
                                    : 'bg-black bg-opacity-50'
                            }`}
                        />
                        <div className="align-center absolute w-5/6">
                            <motion.div
                                animate={{
                                    opacity: hovered ? 1 : 1,
                                    y: hovered ? 0 : 10,
                                }}
                                transition={{ duration: 0.15 }}>
                                <p className="line-clamp-2 text-center font-bold text-white">
                                    {mapGame(game.name)}
                                </p>
                                {/* <p className="text-center text-xs font-normal text-white">
                                    {game.asset_count}{' '}
                                    {game.asset_count === 1
                                        ? 'asset'
                                        : 'assets'}{' '}
                                    available
                                </p> */}
                            </motion.div>
                            <motion.p
                                className="text-center text-xs font-normal text-white"
                                animate={{
                                    opacity: hovered ? 1 : 0,
                                    y: hovered ? 0 : 10,
                                }}
                                transition={{ duration: 0.15 }}>
                                Updated {game.lastUpdated}
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
                    src={`${siteConfig.urls.cdn}/game/${game.name}/icon.png`}
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
