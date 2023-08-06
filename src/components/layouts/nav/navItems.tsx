'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LogIn } from 'lucide-react'
import { Session } from 'lucia'
import { useAuthContext } from '@/context/authContext'

export function NavItems() {
    const { isLoadingSession, session } = useAuthContext()
    console.log(session)

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {!session ? (
                        <Link href="/account/login" passHref>
                            <Button variant="outline">
                                <LogIn className="h-4 w-4" />
                            </Button>
                        </Link>
                    ) : null}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
