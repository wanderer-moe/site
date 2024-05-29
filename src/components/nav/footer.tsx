import { DiscordStatus } from "~/components/discord-status";
import { Heart } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export function SiteFooter(): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background p-3 text-muted-foreground">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="w-full md:flex md:justify-between">
                    <div className="mb-4 flex w-full flex-col md:mb-0 md:w-72">
                        <div className="flex items-center justify-center gap-1 md:justify-start">
                            <img
                                src="/logo.png"
                                alt="wanderer.moe"
                                className=""
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
                            <DiscordStatus />
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
                                        href="https://discord.wanderer.moe/"
                                        className="transition-colors hover:text-primary"
                                    >
                                        Discord
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="https://x.com/wanderermoe"
                                        className="transition-colors hover:text-primary"
                                    >
                                        Twitter (X)
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="https://git.wanderer.moe/"
                                        className="transition-colors hover:text-primary"
                                    >
                                        GitHub
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
                                        className="transition-colors hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="mailto:legal@wanderer.moe"
                                        className="transition-colors hover:text-primary"
                                    >
                                        Legal Inquiries
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="mailto:dmca@wanderer.moe"
                                        className="transition-colors hover:text-primary"
                                    >
                                        DMCA Requests
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-main-300 my-6 sm:mx-auto lg:my-8" />
                <div className="flex flex-col gap-1 text-center text-xs">
                    <span className="text-primary font-semibold">
                        wanderer.moe © 2022-{currentYear}
                    </span>
                    <span>
                        <p>
                            Not affiliated with any of the games or companies
                            listed on this site unless otherwise stated.
                        </p>
                        <p>
                            Built with{" "}
                            <Heart
                                className="text-red-300 inline-block h-3 w-3 text-muted-foreground"
                                fill="currentColor"
                            />{" "}
                            by{" "}
                            <Link
                                className="text-primary"
                                href="https://dromzeh.dev/?ref=wanderer.moe"
                            >
                                dromzeh
                            </Link>
                        </p>
                    </span>
                </div>
            </div>
        </footer>
    );
}
