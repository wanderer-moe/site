'use client'

import { Sparkles, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const GitHubApi = 'https://api.github.com/repos/'
const org = 'wanderer-moe'
const repositories = ['site', 'api']

export function GHStar() {
    const [totalStars, setTotalStars] = useState<string>('Unknown')

    useEffect(() => {
        let total = 0
        repositories.forEach((repo) => {
            fetch(`${GitHubApi}${org}/${repo}`)
                .then((res) => res.json())
                .then((data) => {
                    total += data.stargazers_count
                    setTotalStars(total.toString())
                })
                .catch((err) => {
                    console.error(err)
                })
        })
    }, [])

    // maybe fill-current ?
    return (
        <Link
            target="_blank"
            rel="noreferrer"
            href="https://git.wanderer.moe/site">
            <Button className="group w-full" variant={'outline'}>
                <span className="relative flex items-center">
                    <Sparkles
                        className="absolute
                         h-5 w-5 scale-50
                        stroke-2
                        opacity-0 duration-300
                        group-hover:rotate-[360deg]
                        group-hover:scale-100
                        group-hover:opacity-100
                        dark:stroke-yellow-200"
                    />
                    <Sparkle
                        className="mr-2 h-5 w-5
                        stroke-2 duration-300
                        group-hover:rotate-[360deg] group-hover:scale-[1.5]
                        group-hover:opacity-0
                        dark:stroke-yellow-200"
                    />{' '}
                    GitHub: {totalStars} stars
                </span>
            </Button>
        </Link>
    )
}
