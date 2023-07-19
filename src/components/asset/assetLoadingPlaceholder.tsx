'use client'

import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function AssetLoadingPlaceholder() {
    const displayFakes = 6
    return (
        <div>
            <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
                {[...Array(displayFakes)].map((_, i) => (
                    <Skeleton className="h-32 w-full" key={i} />
                ))}
            </div>
        </div>
    )
}
