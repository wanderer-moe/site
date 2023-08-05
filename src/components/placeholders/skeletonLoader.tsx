'use client'

// import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface SkeletonLoaderProps {
    displayFakes?: number
    gridCols?: 1 | 2
}

export function SkeletonLoader({
    displayFakes = 12,
    gridCols = 2,
}: SkeletonLoaderProps) {
    const gridColsClass = gridCols === 1 ? 'grid-cols-1' : 'md:grid-cols-2'

    return (
        <div>
            <div className={`grid gap-6 ${gridColsClass}`}>
                {[...Array(displayFakes)].map((_, i) => (
                    <Skeleton className="h-32 w-full" key={i} />
                ))}
            </div>
        </div>
    )
}
