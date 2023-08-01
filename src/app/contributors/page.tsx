'use client'

import { Contributor } from '@/interfaces/discord/contributor'
import { Code, Heart, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

async function getData(): Promise<Contributor[]> {
    const res = await fetch('https://api.wanderer.moe/discord/contributors')
    const { contributors } = await res.json()
    return contributors
}

export default function Page() {
    const [contributors, setContributors] = useState<Contributor[]>([])

    useEffect(() => {
        getData().then((data) => setContributors(data))
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

    const roleColors: { [key: string]: string } = {
        'Project Lead': 'bg-indigo-300',
        Developer: 'bg-indigo-200',
        Admin: 'bg-blue-300',
        'Senior Moderator': 'bg-purple-300',
        Moderator: 'bg-purple-200',
        Translator: 'bg-violet-100',
        Contributor: 'bg-violet-200',
        'Server Booster': 'bg-yellow-200',
    }

    function getTopmostCategory(contributor: Contributor) {
        for (const [category, { roles }] of Object.entries(categories)) {
            if (roles.some((role) => contributor.roles.includes(role))) {
                return category
            }
        }
    }

    return (
        <main className="min-h-screen p-5 md:px-16 lg:px-48">
            <div className="flex flex-col items-center justify-center">
                <div className="relative mt-8 px-2 grid gap-8 md:grid-cols-1 lg:grid-cols-3 lg:px-0">
                    <div className="col-span-3 gap-4">
                        {Object.entries(categories).map(
                            ([category, { description, roles, icon }]) => (
                                <div key={category} id={category} className="mb-8">
                                    <span className="flex items-center mb-2 gap-2">
                                        <span className="inline-block">{icon}</span>
                                        <p className="text-3xl font-bold text-white">{category}</p>
                                    </span>
                                    <p className="text-md mb-4 font-semibold text-white">{description}</p>
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                        {contributors
                                            .filter(
                                                (contributor) =>
                                                    roles.some((role) => contributor.roles.includes(role)) &&
                                                    getTopmostCategory(contributor) === category
                                            )
                                            .map((contributor) => (
                                                <div
                                                    key={contributor.id}
                                                    className="relative flex flex-col items-center justify-center overflow-hidden rounded-md border bg-cover p-2 text-white transition ease-in-out hover:scale-105"
                                                >
                                                    <a href={`https://discord.com/users/${contributor.id}`} target="_blank" rel="noreferrer">
                                                        <img
                                                            src={contributor.avatar}
                                                            alt={`${contributor.username} avatar`}
                                                            className="mb-1 h-16 w-16 rounded-full object-left"
                                                        />
                                                    </a>
                                                    <p className="flex items-center justify-center text-sm font-bold text-white mb-1 gap-1">
                                                        {contributor.username}
                                                        {contributor.globalname &&
                                                            contributor.globalname !== contributor.username && (
                                                                <span className="text-xs font-semibold text-gray-400">
                                                                    aka "{contributor.globalname}"
                                                                </span>
                                                            )}
                                                    </p>

                                                    <div className="flex flex-wrap justify-center gap-x-1 gap-y-1">
                                                        {contributor.roles.map((role) => (
                                                            <div
                                                                key={role}
                                                                className="flex items-center rounded-md border px-2 py-1 text-xs text-gray-400"
                                                            >
                                                                <span
                                                                    className={`${roleColors[role]} mr-1 h-2 w-2 rounded-full`}
                                                                ></span>
                                                                {role}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}