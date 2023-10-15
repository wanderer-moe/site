'use client'

import AssetContainer from '@/components/asset/assets-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Asset } from '@/interfaces/asset/asset'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { AssetSearchHandler } from '@/components/search/assets/asset-search-sidebar'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
interface SearchParams {
    game?: string
    query?: string
    asset?: string
}

function getData(searchParams: SearchParams) {
    return fetch(
        `${siteConfig.urls.api}/search/assets?${new URLSearchParams(
            searchParams as any,
        )}`,
    )
        .then((res) => res.json())
        .then((data) => data.results)
}

function SearchPage() {
    const searchParams = useSearchParams()!

    const [data, setData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        Promise.all([getData(searchParams as SearchParams)]).then(([data]) => {
            setData(data)
            setLoading(false)
        })
    }, [searchParams])

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/`}>
                        <Home size={16} />
                    </Link>
                </div>
                <ChevronRight size={16} />
                <div className="whitespace-nowrap text-foreground">
                    <Link href={`/search`}>Search</Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <AssetSearchHandler />
                {loading ? (
                    <div className={'w-full'}>
                        <SkeletonLoader
                            className="grid grid-cols-1 gap-4 lg:grid-cols-2"
                            skeletonClassName="rounded-xl"
                        />
                    </div>
                ) : (
                    <>
                        {data.length !== 0 ? (
                            <div className={'w-full'}>
                                <AssetContainer assets={data} />
                            </div>
                        ) : (
                            <div className="mt-10 w-full">
                                <p className="text-2xl font-bold tracking-tight">
                                    No results found.
                                </p>
                                <p className=" text-muted-foreground">
                                    Try broadening your search query?
                                </p>
                                <p className="mt-2 text-xs text-muted-foreground">
                                    If theres an asset that doesn&apos;t exist
                                    on the site yet, fill out our{' '}
                                    <Link
                                        href="/asset-request-form"
                                        className="text-white">
                                        Asset Request Form
                                    </Link>{' '}
                                    and we&apos;ll get to it as soon as
                                    possible.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default SearchPage
