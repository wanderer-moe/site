'use client'

import { useState } from 'react'
import AssetItem from '@/components/asset/assetItem'
import type { Asset } from '@/interfaces/asset'
import { Button } from '@/components/ui/button'

export default function AssetContainer(assets: any) {
    const [displayedAssets, setDisplayedAssets] = useState(
        assets.assets.slice(0, 50),
    )
    const [numDisplayed, setNumDisplayed] = useState(
        Math.min(50, assets.assets.length),
    )

    const handleShowMore = () => {
        const newNumDisplayed = Math.min(
            numDisplayed + 50,
            assets.assets.length,
        )
        setDisplayedAssets(assets.assets.slice(0, newNumDisplayed))
        setNumDisplayed(newNumDisplayed)
    }

    return (
        <div>
            <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
                {displayedAssets.map((item: Asset) => (
                    <AssetItem key={item.id} {...item} />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="mt-3">
                    Currently displaying {numDisplayed}/{assets.assets.length}{' '}
                    available assets.
                </p>
                {numDisplayed < assets.assets.length && (
                    <Button onClick={handleShowMore} className="mt-2">
                        Show More Assets
                    </Button>
                )}
            </div>
        </div>
    )
}
