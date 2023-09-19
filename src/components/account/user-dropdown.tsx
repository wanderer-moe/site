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
import { roleFlagsToArray } from '@/lib/helpers/roleFlags'
import { logoutUser } from '@/context/auth-context'

interface UserNavProps {
    session: any
}

export function UserNav(props: UserNavProps) {
    const { session } = props
    console.log(session.user.roleFlags)
    const roles = roleFlagsToArray(session.user.roleFlags)

    const isStaffOrContributor =
        roles.includes('CONTRIBUTOR') || roles.includes('STAFF')

    console.log(roles)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt={session.user.username} />
                        <AvatarFallback>
                            {session.user.username[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 w-auto" align="end" forceMount>
                <div className="flex items-center space-x-2 p-2">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {session.user.username}
                        </p>
                        <p className="text-xs font-normal leading-none text-muted-foreground">
                            {session.user.email}
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
                    <DropdownMenuItem disabled={isStaffOrContributor}>
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
                    onClick={() =>
                        logoutUser().then(() => window.location.reload())
                    }>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
