'use client'

import {
    CommandDialog,
    CommandEmpty,
    CommandItem,
    CommandList,
    CommandGroup,
    CommandInput,
    CommandSeparator,
} from '@/components/ui/command'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { ArrowUpDown, CornerDownLeft, Home, X as CloseIcon } from 'lucide-react'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'

import { useTheme } from 'next-themes'

export function CommandMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { setTheme, theme } = useTheme()

    const router = useRouter()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && e.ctrlKey) {
                e.preventDefault()
                setIsOpen(!isOpen)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const runCommand = useCallback((command: () => unknown) => {
        setIsOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant={'outline'}
                className=""
                onClick={() => setIsOpen(!isOpen)}>
                {' '}
                <Search size={14} />{' '}
            </Button>
            <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput placeholder="Search" />
                <CommandList>
                    <CommandEmpty>No results found</CommandEmpty>
                    <CommandGroup heading="Pages">
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() => runCommand(() => router.push('/'))}>
                            <Home size={16} />
                            <span className="ml-2">Home</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Actions">
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }>
                            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="ml-2">Toggle Theme</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
                <CommandSeparator />
                <div className="flex justify-end gap-4 p-3 text-sm text-muted-foreground">
                    <div className="flex flex-row items-center gap-1">
                        <ArrowUpDown
                            size={20}
                            color="white"
                            className="rounded-sm border-neutral-700 bg-neutral-800 p-1"
                        />
                        Navigate
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <CornerDownLeft
                            size={20}
                            color="white"
                            className="rounded-sm border-neutral-700 bg-neutral-800 p-1"
                        />
                        Select
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <CloseIcon
                            size={20}
                            color="white"
                            className="rounded-sm border-neutral-700 bg-neutral-800 p-1"
                        />
                        Close
                    </div>
                </div>
            </CommandDialog>
        </>
    )
}
