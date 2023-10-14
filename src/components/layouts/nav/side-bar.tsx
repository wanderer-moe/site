import { Button } from '@/components/ui/button'
import React, { useState, useEffect, useMemo } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LocaleChanger } from './locale-changer'
import { DiscordStatus } from '@/components/status/discord-status'
import { ScrollArea } from '@/components/ui/scroll-area'
import { QuickLinksList } from '@/components/layouts/nav/quick-links'
import Image from 'next/image'
import Link from 'next/link'
import {
    Dices,
    Scroll,
    Menu,
    Search,
    HardDriveUpload,
    Home,
} from 'lucide-react'
import { SessionSideBar } from '@/components/layouts/nav/session-sidebar'
import { usePathname } from 'next/navigation'

export function SideBar() {
    const [open, setOpen] = useState(false)

    const currentPath = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [currentPath])

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu size={16} />
                        <span className="sr-only">Open Sidebar</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="z-[150] flex w-full flex-col bg-zinc-950/70 px-5 pt-16 backdrop-blur-lg backdrop-filter md:w-5/6">
                    <ScrollArea>
                        <div className="pr-3">
                            <div className="mb-4 flex flex-col gap-4">
                                <div className="flex items-center justify-center gap-1 md:justify-start">
                                    <Image
                                        src="/icon.svg"
                                        alt="wanderer.moe"
                                        width={30}
                                        height={30}
                                    />
                                    <Link href="/" passHref>
                                        <p className="cursor-pointer text-xl font-semibold text-white">
                                            wanderer.moe
                                        </p>
                                    </Link>
                                </div>
                                <SessionSideBar />
                                <Links />
                            </div>
                            <div className="flex flex-col gap-2">
                                <LocaleChanger />
                                <DiscordStatus />
                                <QuickLinksList />
                            </div>
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}

function Links() {
    return (
        <div className="mt-4 flex flex-col gap-2">
            <Link href="/" className="w-full transition-colors">
                <Button
                    variant="ghost"
                    className="flex w-full flex-row items-center justify-start gap-2">
                    <Home className="h-4 w-4" />
                    <p className="cursor-pointer text-white">Home</p>
                </Button>
            </Link>
            <Link href="/search" className="w-full transition-colors">
                <Button
                    variant="ghost"
                    className="flex w-full flex-row items-center justify-start gap-2">
                    <Search className="h-4 w-4" />
                    <p className="cursor-pointer text-white">Search Assets</p>
                </Button>
            </Link>
            <Link href="/oc-generators" className="w-full transition-colors">
                <Button
                    variant="ghost"
                    className="flex w-full flex-row items-center justify-start gap-2">
                    <Dices className="h-4 w-4" />
                    <p className="cursor-pointer text-white">OC Generators</p>
                </Button>
            </Link>
            <Link href="/changelog" className="w-full transition-colors">
                <Button
                    variant="ghost"
                    className="flex w-full flex-row items-center justify-start gap-2">
                    <Scroll className="h-4 w-4" />
                    <p className="cursor-pointer text-white">Changelog</p>
                </Button>
            </Link>
            <Link
                href="/asset-request-form"
                className="w-full transition-colors">
                <Button
                    variant="ghost"
                    className="flex w-full flex-row items-center justify-start gap-2">
                    <HardDriveUpload className="h-4 w-4" />
                    <p className="cursor-pointer text-white">
                        Asset Request Form
                    </p>
                </Button>
            </Link>
        </div>
    )
}
