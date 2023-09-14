'use client'

import { Button } from '@/components/ui/button'
import { useCurrentSession, useCurrentUser } from '@/context/auth-context'
import { Lock, Unlock, Shuffle, Clipboard, Save } from 'lucide-react'

import * as React from 'react'

interface DataHandlerProps {
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}

export function DataHandler(props: DataHandlerProps) {
    const { options } = props.data
    const user = useCurrentUser()

    const [optionStates, setOptionStates] = React.useState(
        options.map((option) => ({
            ...option,
            locked: false,
            currentOption:
                option.entries[
                    Math.floor(Math.random() * option.entries.length)
                ],
        })),
    )

    const shuffleAllOptions = () => {
        const shuffledOptions = optionStates.map((option) => {
            if (!option.locked) {
                return {
                    ...option,
                    currentOption:
                        option.entries[
                            Math.floor(Math.random() * option.entries.length)
                        ],
                }
            }
            return option
        })
        setOptionStates(shuffledOptions)
    }

    const toggleLock = (optionName: string) => {
        const updatedOptions = optionStates.map((option) => {
            if (option.name === optionName) {
                return {
                    ...option,
                    locked: !option.locked,
                }
            }
            return option
        })

        setOptionStates(updatedOptions)
    }

    const shuffleOption = (optionName: string) => {
        const updatedOptions = optionStates.map((option) => {
            if (option.name === optionName) {
                return {
                    ...option,
                    currentOption:
                        option.entries[
                            Math.floor(Math.random() * option.entries.length)
                        ],
                }
            }
            return option
        })

        setOptionStates(updatedOptions)
    }

    return (
        <>
            <div className="my-4 flex flex-col gap-2">
                <div className="flex flex-row space-x-2">
                    <Button
                        variant="outline"
                        className="flex w-full items-center"
                        onClick={shuffleAllOptions}>
                        <Shuffle className="mr-2" size={16} /> Shuffle All
                    </Button>
                    <Button
                        variant="outline"
                        className="flex w-full items-center"
                        onClick={() => {
                            const lockedOptions = optionStates.map(
                                (option) => ({
                                    ...option,
                                    locked: true,
                                }),
                            )
                            setOptionStates(lockedOptions)
                        }}>
                        <Lock className="mr-2" size={16} /> Lock All
                    </Button>
                    <Button
                        variant="outline"
                        className="flex w-full items-center"
                        onClick={() => {
                            const unlockedOptions = optionStates.map(
                                (option) => ({
                                    ...option,
                                    locked: false,
                                }),
                            )
                            setOptionStates(unlockedOptions)
                        }}>
                        <Unlock className="mr-2" size={16} /> Unlock All
                    </Button>
                </div>
                <div className="flex flex-row space-x-2">
                    <Button
                        variant="outline"
                        className="flex w-full items-center"
                        onClick={() => {
                            const concatenatedOptions = optionStates
                                .map(
                                    (option) =>
                                        `${option.name}: ${option.currentOption}`,
                                )
                                .join('\n')
                                .concat(`\n\n${window.location.href}`)
                            navigator.clipboard.writeText(concatenatedOptions)
                        }}>
                        <Clipboard className="mr-2" size={16} /> Copy To
                        Clipboard
                    </Button>
                    <Button
                        variant="outline"
                        disabled={!user}
                        className="flex w-full items-center"
                        onClick={() => {
                            if (!user) return
                            console.log('saving result to account')
                        }}>
                        <Save className="mr-2" size={16} /> Save To Account
                    </Button>
                </div>
            </div>
            <div className="mt-4 rounded-xl border bg-secondary/25">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    Characteristics
                </h1>
                <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {optionStates.map((option) => (
                        <OptionHandler
                            key={option.name}
                            option={option}
                            shuffleOption={() => shuffleOption(option.name)}
                            toggleLock={() => toggleLock(option.name)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

interface OptionHandlerProps {
    option: {
        name: string
        currentOption: string
        locked: boolean
        entries: string[]
    }
    shuffleOption: () => void
    toggleLock: () => void
}

function OptionHandler({
    option,
    shuffleOption,
    toggleLock,
}: OptionHandlerProps) {
    const { name, currentOption, locked } = option

    return (
        <div className="relative flex items-center justify-between rounded-lg border bg-[#09090B] p-2 px-4 transition-colors hover:border-primary/50">
            <div>
                <p className="text-lg font-semibold">{name}</p>
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
                    onClick={shuffleOption}
                    disabled={locked}>
                    <Shuffle size={16} />
                </Button>

                <Button variant="secondary" onClick={toggleLock}>
                    {locked ? <Lock size={16} /> : <Unlock size={16} />}
                </Button>
            </div>
        </div>
    )
}
