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
import { Session } from 'lucia'
import { Button } from '@/components/ui/button'

// interface NavitemsProps {
//     session: Session
// }

export function Navitems() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/account/login" passHref>
                        <Button variant="ghost">
                            <LogIn className="h-4 w-4" />
                        </Button>
                    </Link>
                    {/* <UserNav {...props} /> */}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
