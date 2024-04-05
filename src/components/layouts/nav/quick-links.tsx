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
            {/* <Tiktok /> */}
            <div className="dark:hidden">
                <TiktokLight />
            </div>
            <div className="hidden dark:block">
                <Tiktok />
            </div>
            <DiscordLink />
            <GitHubLink />
            <SupportEmailLink />
            <StatusIcon />
        </div>
    )
}

function DiscordLink() {
    return (
        <Link
            href={siteConfig.socials.discord}
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <DiscordLogoIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function GitHubLink() {
    return (
        <Link
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <GitHubLogoIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function SupportEmailLink() {
    return (
        <Link
            href={`mailto:${siteConfig.support.email}`}
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <EnvelopeClosedIcon className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function StatusIcon() {
    return (
        <Link
            href={siteConfig.urls.status}
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <AreaChart className="h-4 w-4" />
            </Button>
        </Link>
    )
}

function Tiktok() {
    // shameless plug
    // nit: literally no UI library has a tiktok icon :(s
    return (
        <Link
            href="https://tiktok.com/@dromzeh"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="5"
                    stroke="#fff"
                    fill="none">
                    <path
                        d="M52.46,26.64c-1.15.25-4.74.65-9.7-2.41a.5.5,0,0,0-.77.42s0,10,0,13.33c0,2.68.15,20.4-17.16,18.42,0,0-13.68-1-13.68-16.33,0,0,.19-13.8,16.42-15a.51.51,0,0,1,.55.5V32.6a.48.48,0,0,1-.42.49c-1.9.27-9.54,1.8-8.69,8.77a7.19,7.19,0,0,0,7.37,6.3s7,.78,7.32-9V7.94a.51.51,0,0,1,.5-.5h6.88a.5.5,0,0,1,.49.41c.36,2,2.42,9.82,10.8,10.31a.5.5,0,0,1,.48.49v7.51A.48.48,0,0,1,52.46,26.64Z"
                        stroke-linecap="round"
                    />
                </svg>
            </Button>
        </Link>
    )
}

function TiktokLight() {
    return (
        <Link
            href="https://tiktok.com/@dromzeh"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="ghost">
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="5"
                    stroke="#000"
                    fill="none">
                    <path
                        d="M52.46,26.64c-1.15.25-4.74.65-9.7-2.41a.5.5,0,0,0-.77.42s0,10,0,13.33c0,2.68.15,20.4-17.16,18.42,0,0-13.68-1-13.68-16.33,0,0,.19-13.8,16.42-15a.51.51,0,0,1,.55.5V32.6a.48.48,0,0,1-.42.49c-1.9.27-9.54,1.8-8.69,8.77a7.19,7.19,0,0,0,7.37,6.3s7,.78,7.32-9V7.94a.51.51,0,0,1,.5-.5h6.88a.5.5,0,0,1,.49.41c.36,2,2.42,9.82,10.8,10.31a.5.5,0,0,1,.48.49v7.51A.48.48,0,0,1,52.46,26.64Z"
                        stroke-linecap="round"
                    />
                </svg>
            </Button>
        </Link>
    )
}
