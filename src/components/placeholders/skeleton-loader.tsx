'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

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
            <div className={cn(`grid gap-4`, className)}>
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
