'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { LogIn } from 'lucide-react'

// interface NavitemsProps {
//     session: Session
// }

export function Navitems() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/account/login" passHref>
                        <Button variant="outline">
                            <LogIn className="h-4 w-4" />
                        </Button>
                    </Link>
                    {/* <UserNav {...props} /> */}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
