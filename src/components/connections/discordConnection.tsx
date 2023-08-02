import { DiscordLogoIcon, PlusIcon } from '@radix-ui/react-icons'
import { Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Session } from 'lucia'

export function DiscordConnection(session: Session) {
    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>
                        <div className="flex items-center text-lg">
                            <DiscordLogoIcon className="mr-3 h-6 w-6 fill-current text-[#5865F2]" />
                            Discord
                        </div>
                    </CardTitle>
                    <CardDescription>Connected as username</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <Button variant="secondary" className="shadow-none">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Refresh Connection
                    </Button>
                    <Button variant="secondary" className="shadow-none">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Unlink
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
