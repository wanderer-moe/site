'use client'

import { Asset } from '@/interfaces/asset'
import { AssetItem } from '@/components/asset/assetItem'
import { useCallback, useEffect, useState } from 'react'

async function getData() {
    const res = await fetch('https://v2-api-testing.wanderer.moe/recent', {
        next: {
            revalidate: 10,
        },
    })
    const { results } = await res.json()

    return results
}

function Home() {
    const [data, setData] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        getData().then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

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

export default Home
