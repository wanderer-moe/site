import { Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function GHStar() {
    // maybe fill-current ?
    return (
        <Link
            target="_blank"
            rel="noreferrer"
            href="https://git.wanderer.moe/site">
            <Button className="group w-full" variant={'outline'}>
                <span className="relative flex items-center">
                    <Sparkles
                        className="absolute -left-1 
                        h-5 w-5 translate-x-0.5 scale-50
                        stroke-yellow-200
                        stroke-2 opacity-0
                        duration-300
                        group-hover:rotate-[125deg]
                        group-hover:scale-100
                        group-hover:opacity-100"
                    />
                    <Star
                        className="mr-2 h-4 w-4
                        stroke-yellow-200 stroke-2
                        duration-300 group-hover:rotate-180
                        group-hover:scale-[1.5]
                        group-hover:opacity-0"
                    />{' '}
                    Star on Github
                </span>
            </Button>
        </Link>
    )
}
