'use client'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import type { Asset } from '@/interfaces/asset/asset'
import * as React from 'react'
import AssetContainer from '@/components/asset/assets-container'
import { siteConfig } from '@/config/site'
import { FilePlus2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function fetchRecentData() {
    const res = await fetch(`${siteConfig.urls.api}/search/assets/recent`, {
        next: {
            revalidate: 5,
        },
    })
    const data = await res.json()
    return data.results
}

export function RecentAssets() {
    const [recentData, setRecentData] = React.useState<Asset[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        fetchRecentData().then((recentResults) => {
            setRecentData(recentResults.slice(0, 4))
            setLoading(false)
        })
    }, [])

    return (
        <React.Suspense fallback={<SkeletonLoader />}>
            <div className="rounded-xl border bg-secondary/25">
                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                    <FilePlus2 size={16} /> Newest Assets
                </h1>
                <div className="p-4">
                    {loading ? (
                        <SkeletonLoader displayFakes={4} className="grid grid-cols-1 gap-4 lg:grid-cols-2" skeletonClassName='rounded-xl' />
                    ) : (
                        <AssetContainer
                            assets={recentData}
                            displayCounter={false}
                        />
                    )}
                </div>
                <div className="px-4">
                    <Link href="/search">
                        <Button variant="secondary" className="mb-4 w-full">
                            View All Assets
                        </Button>
                    </Link>
                </div>
            </div>
        </React.Suspense>
    )
}
