'use client'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/context/auth-context'
import { Lock, Unlock, Shuffle, Clipboard, Save, Dices } from 'lucide-react'
import { ImportToSakuraFM } from '@/components/oc-generators/import/sakura-import-create'
import { DataHandlerProps } from '@/interfaces/oc-generator/oc-generator'
import { GenerateCharacterName } from '@/components/oc-generators/generate-character-name'
import { generateMixedName } from '@/lib/helpers/name/generateCharacterName'
import { useToast } from '@/components/ui/use-toast'
import * as React from 'react'

export function DataHandler(props: DataHandlerProps) {
    const { options } = props.data
    const { toast } = useToast()
    const user = useCurrentUser()

    const [name, setName] = React.useState<string>(generateMixedName())

    const [optionStates, setOptionStates] = React.useState(
        options.map((option) => ({
            ...option,
            locked: false,
            // TODO(dromzeh): fix hydration
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
                        variant="secondary"
                        className="flex w-full items-center"
                        onClick={shuffleAllOptions}>
                        <Shuffle className="mr-2" size={16} /> Shuffle All
                    </Button>
                    <Button
                        variant="secondary"
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
                        variant="secondary"
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
                        variant="secondary"
                        className="flex w-full items-center"
                        onClick={() => {
                            const currentUrl = new URL(window.location.href)
                            currentUrl.host = 'wanderer.moe' // TODO(dromzeh): fix this

                            const message = `Name - ${name}\n${optionStates
                                .map(
                                    (option) =>
                                        `${option.name} - ${option.currentOption}`,
                                )
                                .join('\n')}\n\n${currentUrl.toString()}`
                            try {
                                navigator.clipboard.writeText(message)
                                toast({
                                    title: 'Success',
                                    description: `Copied ${name}'s data to clipboard`,
                                })
                            } catch (e) {
                                toast({
                                    title: 'Error',
                                    description: `Failed copying ${name}'s data to clipboard`,
                                })
                            }
                        }}>
                        <Clipboard className="mr-2" size={16} /> Copy To
                        Clipboard
                    </Button>
                    <Button
                        variant="secondary"
                        disabled={!user}
                        className="flex w-full items-center"
                        onClick={() => {
                            if (!user) return
                            console.log('saving result to account')
                        }}>
                        <Save className="mr-2" size={16} /> Save To Account
                    </Button>
                </div>
                <div className="mt-2 flex">
                    <ImportToSakuraFM
                        options={optionStates}
                        characterName={name}
                    />
                </div>
            </div>
            <div className="mt-4 rounded-xl border bg-secondary-dark">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    <Dices size={16} />
                    Characteristics
                </h1>

                <div className="p-4">
                    <GenerateCharacterName name={name} setName={setName} />
                </div>
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
        <div className="relative flex items-center justify-between rounded-lg border bg-[#09090B] p-2 pl-4 transition-colors hover:border-primary/50">
            <div>
                {/* TODO: make this more clear dependant on lock state... */}
                <p
                    className={`text-lg font-semibold ${
                        locked ? 'text-muted-foreground' : 'text-foreground'
                    }`}>
                    {name}
                </p>
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
