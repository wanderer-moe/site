'use client'

import { Skeleton } from '@/components/ui/skeleton'

interface SkeletonLoaderProps {
    displayFakes?: number
    height?: string
    className?: string
    skeletonClassName?: string
}

export function SkeletonLoader({
    displayFakes = 12,
    height = 'h-32',
    className = '',
    skeletonClassName = '',
}: SkeletonLoaderProps) {
    return (
        <div>
            <div className={`grid gap-4 ${className}`}>
                {[...Array(displayFakes)].map((_, i) => (
                    <Skeleton
                        className={`${height} w-full ${skeletonClassName}`}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}
