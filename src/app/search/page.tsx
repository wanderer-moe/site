'use client'

import AssetContainer from '@/components/asset/assets-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Asset } from '@/interfaces/asset/asset'
import { Game } from '@/interfaces/params'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import { AssetSearchHandler } from '@/components/search/assets/asset-search-sidebar'

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
            <div className="flex flex-col md:flex-row">
                <AssetSearchHandler />
                {loading ? (
                    <div className={'w-full'}>
                        <SkeletonLoader />
                    </div>
                ) : (
                    <>
                        {data.length !== 0 ? (
                            <div className={'w-full'}>
                                <AssetContainer assets={data} />
                            </div>
                        ) : (
                            <div className="mt-10">
                                <p>No results found.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default SearchPage
