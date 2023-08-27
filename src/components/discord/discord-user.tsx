'use client'

import { Contributor } from '@/interfaces/discord/contributor'

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

export function discordUser(contributor: Contributor) {
    return (
        <div
            key={contributor.id}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-md border bg-secondary/40 bg-cover p-2 text-white transition ease-in-out hover:scale-105">
            <a
                href={`https://discord.com/users/${contributor.id}`}
                target="_blank"
                rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={contributor.avatar}
                    alt={`${contributor.username} avatar`}
                    className="mb-1 h-16 w-16 rounded-full object-left"
                />
            </a>
            <p className="mb-1 flex items-center justify-center gap-1 text-sm font-bold text-white">
                {contributor.username}
                {contributor.globalname &&
                    contributor.globalname !== contributor.username && (
                        <span className="text-xs font-semibold text-zinc-400">
                            aka &quot;
                            {contributor.globalname}
                            &quot;
                        </span>
                    )}
            </p>

            <div className="flex flex-wrap justify-center gap-x-1 gap-y-1">
                {contributor.roles.map((role) => (
                    <div
                        key={role}
                        className="flex items-center rounded-md border bg-secondary/75 px-2 py-1 text-xs text-zinc-400">
                        <span
                            className={`${roleColors[role]} mr-1 h-2 w-2 rounded-full`}></span>
                        {role}
                    </div>
                ))}
            </div>
        </div>
    )
}
