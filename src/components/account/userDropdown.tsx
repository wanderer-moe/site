import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import {
    LogOut,
    Link as LinkIcon,
    Settings,
    Upload,
    User as UserIcon,
    FileArchive,
    FileHeart,
} from 'lucide-react'
import { Input } from '../ui/input'

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt="@tempusername" />
                        <AvatarFallback>T</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 w-auto" align="end" forceMount>
                <div className="flex items-center space-x-2 p-2">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            username
                        </p>
                        <p className="text-xs font-normal leading-none text-muted-foreground">
                            temp@email.com
                        </p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href="/account/profile" passHref>
                        <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            View Profile
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/account/collections" passHref>
                        <DropdownMenuItem>
                            <FileArchive className="mr-2 h-4 w-4" />
                            Asset Collections
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/account/saved" passHref>
                        <DropdownMenuItem>
                            <FileHeart className="mr-2 h-4 w-4" />
                            Saved Assets
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/account/upload" passHref>
                        <DropdownMenuItem>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Assets
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/account/settings" passHref>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/account/settings/connections" passHref>
                        <DropdownMenuItem>
                            <LinkIcon className="mr-2 h-4 w-4" />
                            Manage Connections
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <form action="/api/auth/logout">
                    <Button
                        className="w-full text-red-200"
                        variant="ghost"
                        type="submit">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
