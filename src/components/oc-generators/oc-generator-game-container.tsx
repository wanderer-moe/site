import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { mapGame } from '@/lib/helpers/casing/mapping'

interface OCGeneratorGameContainerProps {
    game: string // because we just get the game name, that's all we need
    className?: string
}

export function OCGeneratorGameContainer({
    game,
    className,
}: OCGeneratorGameContainerProps) {
    const [hovered, setHovered] = React.useState<boolean>(false)
    return (
        <div className={cn(className)}>
            <Link href={`/oc-generators/${game}`}>
                <div
                    onTouchCancel={() => setHovered(false)}
                    onTouchEnd={() => setHovered(false)}
                    onTouchStart={() => setHovered(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <motion.div
                        className="relative flex h-24 items-center justify-center rounded-md bg-cover sm:h-28"
                        style={{
                            backgroundImage: `url(${siteConfig.urls.cdn}/assets/${game}/cover.png)`,
                            backgroundSize: '100%',
                        }}
                        animate={{
                            backgroundSize: hovered ? '115%' : '100%',
                            backgroundPosition: hovered ? '50% 15%' : '50% 20%',
                        }}
                        transition={{ duration: 0.15 }}>
                        <div
                            className={`absolute h-full w-full rounded-md bg-black bg-opacity-25 transition-all `}
                        />
                        <div
                            className={`absolute h-full w-full rounded-md transition-all ${
                                hovered
                                    ? 'bg-indigo-500 bg-opacity-50 ring-2 ring-indigo-500'
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
                                <p className="text-center font-bold text-white">
                                    {mapGame(game)}
                                </p>
                                <p className="text-center text-xs font-normal text-white">
                                    placeholder text 1
                                </p>
                            </motion.div>
                            <motion.p
                                className="text-center text-xs font-normal text-white"
                                animate={{
                                    opacity: hovered ? 1 : 0,
                                    y: hovered ? 0 : 10,
                                }}
                                transition={{ duration: 0.15 }}>
                                placeholder text 2
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </Link>
        </div>
    )
}
