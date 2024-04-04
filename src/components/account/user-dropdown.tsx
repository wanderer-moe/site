import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    FileArchive,
    FileHeart,
    Link as LinkIcon,
    LogOut,
    Settings,
    Upload,
    User as UserIcon,
} from 'lucide-react'
import Link from 'next/link'
import { logoutUser } from '@/context/auth-context'
import { Badge } from '@/components/ui/badge'
import { type Session as SessionData } from '@/context/auth-context'

interface UserNavProps {
    session: SessionData
}

export function UserNav(props: UserNavProps) {
    const { session } = props

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex flex-row items-center gap-2"
                    variant="outline">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="" alt={session.user.username} />
                        <AvatarFallback>
                            {session.user.username[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    {session.user.username}
                </Button>
            </DropdownMenuTrigger>
            {/* note: i think this will be better as a "sidebar" type thing? or maybe just clicking it just takes you directly to ur profile ngl */}
            <DropdownMenuContent
                className="z-[200] w-auto"
                align="end"
                forceMount>
                <div className="flex space-x-2 p-2">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {session.user.username}
                        </p>
                        <p className="text-xs font-normal leading-none text-muted-foreground">
                            {session.user.email}
                        </p>
                    </div>
                </div>
                <Badge variant="secondary" key={session.user.role}>
                    {session.user.role}
                </Badge>
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
                    <DropdownMenuItem disabled={session.user.isContributor}>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Assets
                    </DropdownMenuItem>
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
                <Button
                    className="w-full text-red-200"
                    variant="ghost"
                    onClick={() => logoutUser()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
