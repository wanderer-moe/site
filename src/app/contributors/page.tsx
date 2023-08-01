'use client'

import { Contributor } from '@/interfaces/discord/contributor'
import { Code, Heart, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { discordUser as ContributorItem } from '@/components/discord/discordUser'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'

async function getData(): Promise<Contributor[]> {
    const res = await fetch('https://api.wanderer.moe/discord/contributors')
    const { contributors } = await res.json()
    return contributors
}

export default function Page() {
    const [contributors, setContributors] = useState<Contributor[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData().then((data) => setContributors(data))
        setTimeout(() => setLoading(false), 1000)
    }, [])

    const categories = {
        Development: {
            description: 'Managing and developing the project codebase',
            roles: ['Project Lead', 'Developer'],
            icon: <Code />,
        },
        Staff: {
            description: 'Moderating and managing the community',
            roles: ['Admin', 'Senior Moderator', 'Moderator'],
            icon: <Users />,
        },
        Contributors: {
            description: 'Contributing with assets and translations',
            roles: ['Translator', 'Contributor'],
            icon: <Star />,
        },
        Supporters: {
            description: 'Really cool people',
            roles: ['Server Booster'],
            icon: <Heart />,
        },
    }

    function getTopmostCategory(contributor: Contributor) {
        for (const [category, { roles }] of Object.entries(categories)) {
            if (roles.some((role) => contributor.roles.includes(role))) {
                return category
            }
        }
    }

    return (
        <main className="min-h-screen p-5 max-w-screen-xl mx-auto">
            {!loading ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="relative mt-8 grid gap-8 px-2 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                        <div className="col-span-3 gap-4">
                            {Object.entries(categories).map(
                                ([category, { description, roles, icon }]) => (
                                    <div
                                        key={category}
                                        id={category}
                                        className="mb-8">
                                        <span className="mb-2 flex items-center gap-2">
                                            <span className="inline-block">
                                                {icon}
                                            </span>
                                            <p className="text-3xl font-bold text-white">
                                                {category}
                                            </p>
                                        </span>
                                        <p className="text-md mb-4 font-semibold text-white">
                                            {description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
        </main>
    )
}
