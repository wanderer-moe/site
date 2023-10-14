'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function TryAgainButton({ reset }: { reset: () => void }) {
    const [hovered, setHovered] = useState<boolean>(false)
    return (
        <Button
            className="mt-2 flex gap-2"
            onClick={() => reset()}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
            onTouchMove={() => setHovered(false)}
            variant="outline">
            Try Again
            <motion.div animate={{ x: hovered ? 5 : 0 }}>
                <ArrowRight className="h-4 w-4" />
            </motion.div>
        </Button>
    )
}
