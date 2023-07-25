import Link from 'next/link'
import { Status } from '@/components/status'
import { GithubIcon, Heart } from 'lucide-react'
import { Discord } from './discord'

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background p-6 md:px-16 lg:px-36">
            <div>
                <div className="mb-4 text-xs">
                    <p>
                        (c) 2022-2023 wanderer.moe - not affiliated with any of
                        the games or companies listed on this site unless
                        otherwise stated.
                    </p>
                    <p>
                        Built with{' '}
                        <Heart
                            className="inline-block h-4 w-4 text-red-500"
                            fill="currentColor"
                        />{' '}
                        using <Link href="https://nextjs.org/">Next.js</Link> &{' '}
                        <Link href="https://cloudflare.com/">Cloudflare</Link>{' '}
                        by <Link href="https://dromzeh.dev/">dromzeh</Link> and
                        our <Link href="/contributors">contributors.</Link>
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-3 sm:justify-start">
                <Status />
                <Discord />
            </div>
        </footer>
    )
}
