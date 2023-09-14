'use client'

import { Button } from '@/components/ui/button'
import { useCurrentSession, useCurrentUser } from '@/context/auth-context'
import { Lock, Unlock, Shuffle, Clipboard, Save } from 'lucide-react'

import * as React from 'react'

interface DataHandlerProps {
    data: any
}

export function DataHandler(props: DataHandlerProps) {
    const { options } = props.data
    const user = useCurrentUser()

    return (
        <>
            <div className="my-4 flex flex-col gap-2">
                <div className="flex flex-row space-x-2">
                    <Button
                        variant="outline"
                        className="flex w-full items-center">
                        <Shuffle className="mr-2" size={16} /> Shuffle All
                    </Button>
                    <Button
                        variant="outline"
                        className="flex w-full items-center">
                        <Lock className="mr-2" size={16} /> Lock All
                    </Button>
                    <Button
                        variant="outline"
                        className="flex w-full items-center">
                        <Unlock className="mr-2" size={16} /> Unlock All
                    </Button>
                </div>
                <div className="flex flex-row space-x-2">
                    <Button
                        variant="outline"
                        className="flex w-full items-center">
                        <Clipboard className="mr-2" size={16} /> Copy To
                        Clipboard
                    </Button>
                    <Button
                        variant="outline"
                        disabled={!user}
                        className="flex w-full items-center">
                        <Save className="mr-2" size={16} /> Save To Account
                    </Button>
                </div>
            </div>
            <div className="mt-4 rounded-xl border bg-secondary/25">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    Characteristics
                </h1>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {options.map((option: any) => {
                        return <OptionHandler {...option} key={option.name} />
                    })}
                </div>
            </div>
        </>
    )
}

function OptionHandler(option: any) {
    const [currentOption, setCurrentOption] = React.useState(option.entries[0])
    const [locked, setLocked] = React.useState(false)

    const shuffleOption = () => {
        if (locked) return
        const randomEntry =
            option.entries[Math.floor(Math.random() * option.entries.length)]
        setCurrentOption(randomEntry)
    }

    const toggleLock = () => {
        setLocked(!locked)
    }

    return (
        <>
            <div className="relative flex items-center justify-between rounded-lg border bg-[#09090B] p-2 px-4">
                <div>
                    <p className="text-lg font-semibold">{option.name}</p>
                    <p
                        className={`transition-colors ${
                            locked ? 'text-muted-foreground' : 'text-foreground'
                        }`}>
                        {currentOption}
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <Button
                        variant="secondary"
                        onClick={() => shuffleOption()}
                        disabled={locked}>
                        <Shuffle size={16} />
                    </Button>

                    <Button variant="secondary" onClick={() => toggleLock()}>
                        {locked ? <Lock size={16} /> : <Unlock size={16} />}
                    </Button>
                </div>
            </div>
        </>
    )
}
