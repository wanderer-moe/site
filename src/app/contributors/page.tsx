'use client'

import { discordUser as ContributorItem } from '@/components/discord/discord-user'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Contributor } from '@/interfaces/discord/contributor'
import { Code, Heart, Star, Users, Home, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

async function getData(): Promise<Contributor[]> {
    const res = await fetch('https://api.wanderer.moe/discord/contributors')
    const { contributors } = await res.json()
    return contributors
}

export default function Page() {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getData().then((data) => setContributors(data))
        setTimeout(() => setLoading(false), 500)
    }, [])

    const categories = {
        Development: {
            description: 'Managing and developing the project codebase',
            roles: ['Project Lead', 'Developer'],
            icon: <Code size={16} />,
        },
        Staff: {
            description: 'Moderating and managing the community',
            roles: ['Admin', 'Senior Moderator', 'Moderator'],
            icon: <Users size={16} />,
        },
        Contributors: {
            description: 'Contributing with assets and translations',
            roles: ['Translator', 'Contributor'],
            icon: <Star size={16} />,
        },
        Supporters: {
            description: 'Really cool people',
            roles: ['Server Booster'],
            icon: <Heart size={16} />,
        },
    }

    function getTopmostCategory(contributor: Contributor) {
        for (const [category, { roles }] of Object.entries(categories)) {
            if (roles.some((role) => contributor.roles.includes(role))) {
                return category
            }
        }
    }

    // TODO(dromzeh): skeleton loading UX

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/`}>
                        <Home size={16} />
                    </Link>
                </div>
                <ChevronRight size={16} />
                <div className="whitespace-nowrap text-foreground transition-colors">
                    <Link href={`/contributors`}>Contributors</Link>
                </div>
            </div>
            {!loading ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="relative mt-2 grid gap-8 px-2 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                        <div className="col-span-3 gap-4">
                            {Object.entries(categories).map(
                                ([category, { description, roles, icon }]) => (
                                    <div
                                        key={category}
                                        id={category}
                                        className="mb-4 rounded-xl border bg-secondary/25">
                                        <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                            <span className="inline-block">
                                                {icon}
                                            </span>
                                            {category}
                                        </h1>
                                        <div className="m-2 flex items-center justify-center gap-4 text-xs text-zinc-500">
                                            {description}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 border-t p-4 md:grid-cols-3 lg:grid-cols-4">
                                            {contributors
                                                .filter(
                                                    (contributor) =>
                                                        roles.some((role) =>
                                                            contributor.roles.includes(
                                                                role,
                                                            ),
                                                        ) &&
                                                        getTopmostCategory(
                                                            contributor,
                                                        ) === category,
                                                )
                                                .map(
                                                    (
                                                        contributor: Contributor,
                                                    ) => (
                                                        <ContributorItem
                                                            key={contributor.id}
                                                            {...contributor}
                                                        />
                                                    ),
                                                )}
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <SkeletonLoader />
                </div>
            )}
        </div>
    )
}
