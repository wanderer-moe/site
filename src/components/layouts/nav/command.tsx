'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { Dices, Scroll, Home, Search, Box, Gamepad, Tags } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Command() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    // TODO(dromzeh): we can use the /v2/search/all endpoint to get results for assetcategories, tags, etc
    return (
        <>
            <Button variant="outline" onClick={() => setOpen(true)}>
                <Search size={16} />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push('/search'))
                            }>
                            <Box size={16} className="mr-2" />
                            <span>Assets</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push('/game'))
                            }>
                            <Gamepad size={16} className="mr-2" />
                            <span>Games</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push('/tag'))
                            }>
                            <Tags size={16} className="mr-2" />
                            <span>Tags</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Actions">
                        <CommandItem
                            onSelect={() => runCommand(() => router.push('/'))}>
                            <Home size={16} className="mr-2" />
                            <span>Home</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => router.push('/changelog'))
                            }>
                            <Scroll size={16} className="mr-2" />
                            <span>Changelog</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
