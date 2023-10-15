'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/account/user-dropdown'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { SideBar } from './side-bar'
import { useAuthContext } from '@/context/auth-context'
import { Search } from 'lucide-react'

export function NavItems(): React.ReactElement {
    const { isLoadingSession, session } = useAuthContext()
    // console.log(isLoadingSession, session)

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
                <NavigationMenuItem>
                    <Link href="/search" passHref>
                        <Button variant="outline">
                            <Search size={16} />
                        </Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {!session ? (
                        <div className="flex flex-row items-center gap-2">
                            <Link href="/login" passHref>
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link href="/signup" passHref>
                                <Button>Sign Up</Button>
                            </Link>
                        </div>
                    ) : (
                        <UserNav {...session} />
                    )}
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <SideBar />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
