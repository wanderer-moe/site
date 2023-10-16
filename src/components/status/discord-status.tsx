'use client'

import { Button } from '@/components/ui/button'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'

export function DiscordStatus() {
    const [members, setMembers] = useState('Unknown')
    useEffect(() => {
        fetch(
            `https://discord.com/api/guilds/${siteConfig.discord.server_id}/widget.json`,
        )
            .then((res) => res.json())
            .then((data) => {
                setMembers(
                    data.id === '982385887000272956'
                        ? data.presence_count
                        : 'unknown',
                )
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <Link href={siteConfig.socials.discord}>
            <Button
                variant="outline"
                className="w-full group">
                <div
                    className="flex items-center">
                    <DiscordLogoIcon
                        className={`${
                            members === 'unknown'
                                ? 'text-red-200'
                                : 'text-green-200'
                        } group-hover:rotate-[360deg] duration-300`}
                        fill="currentColor"
                    />
                </div>
                <span className="ml-2">Discord: {members} online</span>
            </Button>
        </Link>
    )
}
