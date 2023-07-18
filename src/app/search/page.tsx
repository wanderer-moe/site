'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Asset } from '@/interfaces/asset'
import { useCallback, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { AssetItem } from '@/components/asset/assetitem'

interface SearchParams {
    game?: string
    query?: string
    AssetType?: string
}

function getData(searchParams: SearchParams) {
    return fetch(
        `https://v2-api-testing.wanderer.moe/search?${new URLSearchParams(
            searchParams as any,
        )}`,
    )
        .then((res) => res.json())
        .then((data) => data.results)
}

function InputHandler() {
    return <Input type="email" placeholder="Email" />
}

function SearchPage() {
    const router = useRouter()
    const searchParams = useSearchParams()!

    const [data, setData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getData(searchParams as SearchParams).then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [searchParams])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    {data.map((item: Asset) => (
                        <AssetItem key={item.id} {...item} />
                    ))}
                </div>
            )}
        </main>
    )
}

export default SearchPage
