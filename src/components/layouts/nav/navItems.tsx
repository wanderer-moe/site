'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/account/userDropdown'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LogIn } from 'lucide-react'
import { useAuthContext } from '@/context/authContext'

export function NavItems() {
    const { isLoadingSession, session } = useAuthContext()

    console.log(isLoadingSession, session)

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {!session ? (
                        <Link href="/login" passHref>
                            <Button variant="outline">
                                <LogIn className="h-4 w-4" />
                            </Button>
                        </Link>
                    ) : (
                        <UserNav session={session} />
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
