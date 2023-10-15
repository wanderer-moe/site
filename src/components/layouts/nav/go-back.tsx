'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function GoBackButton() {
    const [hovered, setHovered] = useState<boolean>(false)
    return (
        <Button
            variant="secondary"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
            onTouchMove={() => setHovered(false)}
            onClick={() => (window.location.href = '/')}
            className="mt-2 flex gap-2">
            Go Back
            <motion.div animate={{ x: hovered ? 5 : 0 }}>
                <ArrowRight className="h-4 w-4" />
            </motion.div>
        </Button>
    )
}
