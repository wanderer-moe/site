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
        <Link href={siteConfig.socials.discord}>
            <Button
                variant="outline"
                className="w-full"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
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
