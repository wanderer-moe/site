'use client'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { APIClient } from '@/lib/api-client/client'
import { z } from 'zod'
import type { get_V2assetsearch } from '@/lib/api-client/openapi'
import * as React from 'react'
import AssetContainer from '@/components/asset/assets-container'
import { FilePlus2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Assets = z.infer<get_V2assetsearch['response']>

type Asset = Pick<Assets, 'assets'>['assets'][0]

export function RecentAssets() {
    const [recentData, setRecentData] = React.useState<Asset[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        APIClient.get('/v2/asset/search', {
            query: {
                offset: '0',
            },
        }).then((res) => {
            setRecentData(res.assets)
            setLoading(false)
        })
    }, [])

    return (
        <React.Suspense fallback={<SkeletonLoader />}>
            <div className="rounded-xl border bg-secondary-dark">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    <FilePlus2 size={16} /> Newest Assets
                </h1>
                <div className="p-4">
                    {loading ? (
                        <SkeletonLoader
                            displayFakes={4}
                            className="grid grid-cols-1 gap-4 lg:grid-cols-2"
                            skeletonClassName="rounded-xl"
                        />
                    ) : (
                        <AssetContainer
                            assets={recentData}
                            displayCounter={false}
                        />
                    )}
                </div>
                <div className="px-4">
                    <Link href="/search">
                        <Button
                            variant="secondary"
                            className="mb-4 w-full border border-border">
                            View All Assets
                        </Button>
                    </Link>
                </div>
            </div>
        </React.Suspense>
    )
}
