'use client'

import { Button } from '@/components/ui/button'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { motion } from 'framer-motion'

export function DiscordStatus() {
    const [members, setMembers] = useState('Unknown')
    const [hovered, setHovered] = useState(false)

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

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Link href={siteConfig.socials.discord}>
            <Button
                variant="outline"
                className="w-full"
                // TODO(dromzeh): this hurts to look at
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
                onTouchCancel={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <motion.div
                    animate={{ rotate: hovered ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center">
                    <DiscordLogoIcon
                        className={`${
                            members === 'unknown'
                                ? 'text-red-200'
                                : 'text-green-200'
                        } animate-pulse`}
                        fill="currentColor"
                    />
                </motion.div>
                <span className="ml-2">Discord: {members} online</span>
            </Button>
        </Link>
    )
}
