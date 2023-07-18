import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

function Navbar() {
    return (
        <header className="sticky top-0 z-[100] border-b border-gray-600/10 pb-0 pt-0 backdrop-blur-lg backdrop-filter"></header>
    )
}

export default Navbar
