'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { LogIn } from 'lucide-react'
import { UserNav } from '@/components/account/userDropdown'

export function Navitems() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {/* <Link href="/auth/login" passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            <LogIn className="h-4 w-4" />
                        </NavigationMenuLink>
                    </Link> */}
                    <UserNav />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
