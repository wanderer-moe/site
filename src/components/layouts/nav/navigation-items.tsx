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

export function NavItems(): React.ReactElement {
    const { isLoadingSession, session } = useAuthContext()
    console.log(isLoadingSession, session)

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex">
                <NavigationMenuItem>
                    <div className="mr-2">
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
                    </div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <SideBar />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
