'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { debounce } from 'lodash'

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }, 100)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-0 right-0 z-50 p-3"
            initial={{ opacity: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.15 }}>
            <Button
                variant="outline"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }}>
                <ChevronUp />
            </Button>
        </motion.div>
    )
}
