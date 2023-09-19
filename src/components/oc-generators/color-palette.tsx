'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Copy, Shuffle, Lock, Unlock } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export default function ColorPalette() {
    const [colors, setColors] = React.useState<string[]>([])

    const generateColors = React.useCallback(() => {
        const newColors = []
        for (let i = 0; i < 5; i++) {
            newColors.push(generateColor())
        }
        setColors(newColors)
    }, [])

    React.useEffect(() => {
        generateColors()
    }, [generateColors])

    const generateColor = () => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++)
            color += letters[Math.floor(Math.random() * 16)]
        return color
    }

    return (
        <div>
            <div className="mt-4 rounded-xl border bg-secondary/25">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    Color Palette
                </h1>
                <div className="px-6 pt-4">
                    <Button onClick={generateColors} className="w-full">
                        Generate Colors
                    </Button>
                </div>
                <div className="flex flex-col gap-4 p-6 md:flex-row">
                    {colors.map((color, index) => (
                        <ColorPaletteItem
                            key={index}
                            color={color}
                            locked={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ColorPaletteItemProps {
    color: string
    locked: boolean
    onClick?: () => void
}

function ColorPaletteItem(props: ColorPaletteItemProps) {
    const [hovered, setHovered] = React.useState<boolean>(false)

    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)

    return (
        <div className="relative h-24 flex-grow rounded-lg md:h-48">
            <div
                className="h-full w-full rounded-lg transition-colors"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ backgroundColor: props.color }}
            />
            <div className="absolute bottom-0 flex flex-row justify-between gap-2 p-2">
                <div className="flex flex-row gap-2">
                    <CopyColorToClipboardButton color={props.color} />
                </div>
            </div>
        </div>
    )
}

function CopyColorToClipboardButton({ color }: { color: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        className="opacity-75 backdrop-blur-lg backdrop-filter"
                        variant={'outline'}
                        onClick={() => navigator.clipboard.writeText(color)}>
                        {color}
                        <Copy size={16} className="ml-2" />{' '}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Copy Color</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
