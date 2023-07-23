import { Variants } from 'framer-motion'

export const assetVariants: Variants = {
    offscreen: {
        opacity: 0.5,
        y: -10,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 0.2,
        },
    },
}
