import { DiscordStatus } from '@/components/status/discord-status'
import { Heart } from 'lucide-react'
import { LocaleChanger } from '@/components/layouts/nav/locale-changer'
import Image from 'next/image'
import Link from 'next/link'
import { GHStar } from '@/components/github/star'

export function SiteFooter(): React.ReactElement {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border bg-background p-3 text-muted-foreground">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="w-full md:flex md:justify-between">
                    <div className="mb-4 flex w-full flex-col md:mb-0 md:w-72">
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <Image
                                src="/icon.svg"
                                alt="wanderer.moe"
                                className="hidden dark:block"
                                width={35}
                                height={35}
                            />
                            <Image
                                src="/icon-t.svg"
                                alt="wanderer.moe"
                                className="dark:hidden"
                                width={35}
                                height={35}
                            />
                            <Link href="/" passHref>
                                <p className="cursor-pointer text-xl font-semibold text-primary">
                                    wanderer.moe
                                </p>
                            </Link>
                        </div>
                        <div className="mt-4 grid gap-2">
                            <LocaleChanger />
                            <DiscordStatus />
                            <GHStar />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <p className="mb-4 pt-1 font-semibold text-primary">
                                Socials
                            </p>
                            <ul className="text-muted-foreground">
                                <li className="mb-2">
                                    <Link
                                        href="https://git.wanderer.moe/"
                                        className="transition-colors hover:text-primary">
                                        GitHub
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="https://discord.wanderer.moe/"
                                        className="transition-colors hover:text-primary">
                                        Discord Server
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4 pt-1 font-semibold text-primary">
                                Legal
                            </p>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        href="/legal/privacy-policy"
                                        className="transition-colors hover:text-primary">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/legal/terms-of-service"
                                        className="transition-colors hover:text-primary">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/legal/cookie-policy"
                                        className="transition-colors hover:text-primary">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4 pt-1 font-semibold text-primary">
                                Other
                            </p>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        href="https://wanderer.moe/asset-request-form"
                                        className="transition-colors hover:text-primary">
                                        Asset Request Form
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/contributors"
                                        className="transition-colors hover:text-primary">
                                        Contributors
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <p className="cursor-pointer transition-colors hover:text-primary">
                                        Contribute
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-main-300 my-6 sm:mx-auto lg:my-8" />
                <div className="flex flex-col gap-1 text-center text-xs">
                    <span className="text-primary">
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
                                className="inline-block h-3 w-3 text-muted-foreground"
                                fill="currentColor"
                            />{' '}
                            using{' '}
                            <Link
                                className="text-primary"
                                href="https://nextjs.org/">
                                Next.js
                            </Link>{' '}
                            &{' '}
                            <Link
                                className="text-primary"
                                href="https://cloudflare.com/">
                                Cloudflare
                            </Link>{' '}
                            by{' '}
                            <Link
                                className="text-primary"
                                href="https://dromzeh.dev/?ref=wanderer.moe">
                                dromzeh
                            </Link>{' '}
                            and our{' '}
                            <Link className="text-primary" href="/contributors">
                                contributors.
                            </Link>
                        </p>
                    </span>
                </div>
            </div>
        </footer>
    )
}
