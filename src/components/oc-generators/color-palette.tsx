'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Shuffle, Palette } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { GetColorName } from 'hex-color-to-color-name'
import { readableColor } from 'polished'

interface ColorPaletteProps {
    itemHeight?: number
}

const initialColors = ['#083D77', '#7F95D1', '#7DE2D1', '#FFC0BE', '#FFEBE7']

export default function ColorPalette(props: ColorPaletteProps) {
    const [colors, setColors] = React.useState<string[]>(initialColors)

    const generateColors = React.useCallback(() => {
        const newColors = []
        for (let i = 0; i < 5; i++) {
            newColors.push(generateColor())
        }
        setColors(newColors)
    }, [])

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
                    <Palette size={16} />
                    Color Palette
                </h1>
                <div className="px-6 pt-4">
                    <Button
                        onClick={generateColors}
                        className="flex w-full items-center gap-2">
                        <Shuffle size={16} />
                        Generate Colors
                    </Button>
                </div>
                <div className="flex flex-col gap-4 p-6 md:flex-row">
                    {colors.map((color, index) => (
                        <ColorPaletteItem
                            height={props.itemHeight || 48}
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
    height?: number
}

function ColorPaletteItem(props: ColorPaletteItemProps) {
    const [hovered, setHovered] = React.useState<boolean>(false)

    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)

    const textColor = readableColor(props.color)

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative h-24 flex-grow rounded-lg transition-all ${
                props.height ? `h-${props.height}` : 'h-48'
            }`}>
            <div
                className="h-full w-full rounded-lg transition-colors"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ backgroundColor: props.color }}
            />
            <div
                className={`absolute inset-0 ${
                    hovered
                        ? 'bg-background opacity-75 ring-2 ring-secondary backdrop-blur-lg backdrop-filter'
                        : ''
                } rounded-lg transition-all`}
            />
            <div className="absolute top-0 flex flex-row justify-between gap-2 p-2">
                <p style={{ color: hovered ? 'white' : textColor }}>
                    {GetColorName(props.color)}
                </p>
            </div>
            <div className="absolute bottom-0 flex flex-row justify-between gap-2 p-2">
                <div className="flex flex-col gap-1">
                    <CopyColorToClipboardButton color={props.color} />
                </div>
            </div>
            <div className="absolute top-0 flex flex-row justify-between gap-2 p-2"></div>
        </div>
    )
}

function CopyColorToClipboardButton({ color }: { color: string }) {
    return (
        <TooltipProvider delayDuration={10}>
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
