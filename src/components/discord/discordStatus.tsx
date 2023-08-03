'use client'

import { Button } from '@/components/ui/button'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function DiscordStatus() {
    const [members, setMembers] = useState('Unknown')

    useEffect(() => {
        fetch('https://discord.com/api/guilds/982385887000272956/widget.json')
            .then((res) => res.json())
            .then((data) => {
                if (data.id === '982385887000272956') {
                    setMembers(data.presence_count)
                } else {
                    setMembers('unknown')
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <Link href="https://discord.wanderer.moe">
            <Button variant="outline" className="w-full">
                <DiscordLogoIcon
                    className={`${
                        members === 'unknown'
                            ? 'text-red-200'
                            : 'text-green-200'
                    } animate-pulse`}
                    fill="currentColor"
                />
                <span className="ml-2">Discord: {members} online</span>
            </Button>
        </Link>
    )
}
