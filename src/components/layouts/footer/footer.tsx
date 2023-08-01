import Link from 'next/link'
import { Status } from '@/components/status'
import { Heart } from 'lucide-react'
import { DiscordStatus } from '@/components/discord/discordStatus'

export function SiteFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t p-3 text-gray-400 backdrop-blur-lg backdrop-filter transition-opacity">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-4 flex flex-col md:mb-0">
                        <div className="mt-2 grid gap-2">
                            <Status />
                            <DiscordStatus />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <p className="mb-4 font-semibold text-white">
                                Socials
                            </p>
                            <ul>
                                <li className="mb-2">
                                    <a
                                        href="https://git.wanderer.moe/"
                                        className="hover:text-white">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://discord.wanderer.moe/"
                                        className="hover:text-white">
                                        Discord Server
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4 font-semibold text-white">
                                Legal
                            </p>
                            <ul>
                                <li className="mb-2">
                                    <a
                                        href="/legal/privacy-policy"
                                        className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="/legal/terms-of-service"
                                        className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4 font-semibold text-white">
                                Other
                            </p>
                            <ul>
                                <li className="mb-2">
                                    <a
                                        href="https://wanderer.moe/asset-request-form"
                                        className="hover:text-white">
                                        Asset Request Form
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="/contributors"
                                        className="hover:text-white">
                                        Contributors
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <p className="cursor-pointer hover:text-white">
                                        Contribute
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-main-300 my-6 sm:mx-auto lg:my-8" />
                <div className="flex flex-col gap-1 text-center text-xs">
                    <span className="text-white">
                        wanderer.moe © 2022-{currentYear}
                    </span>
                    <span>
                        <p>
                            Not affiliated with any of the games or companies
                            listed on this site unless otherwise stated.
                        </p>
                        <p>
                            Built with{' '}
                            <Heart
                                className="inline-block h-3 w-3 text-gray-400"
                                fill="currentColor"
                            />{' '}
                            using{' '}
                            <Link
                                className="text-white"
                                href="https://nextjs.org/">
                                Next.js
                            </Link>{' '}
                            &{' '}
                            <Link
                                className="text-white"
                                href="https://cloudflare.com/">
                                Cloudflare
                            </Link>{' '}
                            by{' '}
                            <Link
                                className="text-white"
                                href="https://dromzeh.dev/">
                                dromzeh
                            </Link>{' '}
                            and our{' '}
                            <Link className="text-white" href="/contributors">
                                contributors.
                            </Link>
                        </p>
                    </span>
                </div>
            </div>
        </footer>
    )
}
