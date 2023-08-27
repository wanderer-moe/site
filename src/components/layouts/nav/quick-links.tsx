import { siteConfig } from '@/config/site'
import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { AreaChart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function QuickLinksList() {
    return (
        <div className="flex justify-center space-x-2">
            <DiscordLink />
            <GitHubLink />
            <SupportEmailLink />
            <StatusIcon />
        </div>
    )
}

function DiscordLink() {
    return (
        <Link href={siteConfig.socials.discord}>
            <Button variant="ghost">
                <DiscordLogoIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function GitHubLink() {
    return (
        <Link href={siteConfig.socials.github}>
            <Button variant="ghost">
                <GitHubLogoIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function SupportEmailLink() {
    return (
        <Link href={`mailto:${siteConfig.support.email}`}>
            <Button variant="ghost">
                <EnvelopeClosedIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

// i didn't know what icon to use for this so i just used a chart LOL
function StatusIcon() {
    return (
        <Link href={siteConfig.urls.status}>
            <Button variant="ghost">
                <AreaChart className="h-4 w-4" />
            </Button>
        </Link>
    )
}
