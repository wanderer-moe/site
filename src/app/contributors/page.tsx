'use client'

import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Code, Heart, Star, Users, Home, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { APIClient } from '@/lib/api-client/client'
import { z } from 'zod'

import type { get_V2contributorsall } from '@/lib/api-client/openapi'

export default function Page() {
    type responseType = z.infer<get_V2contributorsall['response']>
    const [contributors, setContributors] = useState<responseType>()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        APIClient.get('/v2/contributors/all').then((res) =>
            setContributors(res),
        )
        setTimeout(() => setLoading(false), 500)
    }, [])

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
                        <div className="col-span-3 gap-4"></div>
                    </div>
                </div>
            ) : (
                <div>
                    <SkeletonLoader skeletonClassName="h-64 rounded-xl" />
                </div>
            )}
        </div>
    )
}
