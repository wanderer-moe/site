'use client'

import AssetItem from '@/components/asset/assetItem'
import { Button } from '@/components/ui/button'
import type { Asset } from '@/interfaces/asset'
import { assetVariants } from '@/lib/framer/variants'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface AssetContainerProps {
    assets: Asset[]
    displayCounter?: boolean
}

export default function AssetContainer({
    assets,
    displayCounter = true,
}: AssetContainerProps) {
    const [displayedAssets, setDisplayedAssets] = useState(assets.slice(0, 50))
    const [numDisplayed, setNumDisplayed] = useState(
        Math.min(50, assets.length),
    )

    const handleShowMore = () => {
        const newNumDisplayed = Math.min(numDisplayed + 50, assets.length)
        setDisplayedAssets(assets.slice(0, newNumDisplayed))
        setNumDisplayed(newNumDisplayed)
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {displayedAssets.map((item: Asset) => (
                    <motion.div
                        variants={assetVariants}
                        key={item.id}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}>
                        <AssetItem key={item.id} {...item} />
                    </motion.div>
                ))}
            </div>
            {displayCounter && (
                <div className="mt-5 flex flex-col items-center justify-center text-zinc-400">
                    <p>
                        Currently displaying{' '}
                        <span className="font-semibold">
                            {numDisplayed}/{assets.length}{' '}
                        </span>
                        available assets.
                    </p>
                    {numDisplayed < assets.length && (
                        <Button onClick={handleShowMore} className="mt-2">
                            Show More Assets
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}
