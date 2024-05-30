import { DiscordStatus } from "~/components/discord-status";
import { GitHubStar } from "../github-star";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
    <Link href={href} className="transition-colors hover:text-primary">
        {children}
    </Link>
);

interface FooterSectionProps {
    title: string;
    links: { href: string; label: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
    <div>
        <p className="mb-4 pt-1 font-semibold text-primary">{title}</p>
        <ul className="text-muted-foreground text-xs">
            {links.map((link, index) => (
                <li key={index} className="mb-2">
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
            ))}
        </ul>
    </div>
);

const footerLinks = {
    socials: [
        { href: "https://discord.wanderer.moe/", label: "Discord" },
        { href: "https://x.com/wanderermoe", label: "Twitter (X)" },
        { href: "https://git.wanderer.moe/", label: "GitHub" },
    ],
    other: [
        { href: "/changelog", label: "Changelog" },
        { href: "https://status.wanderer.moe/", label: "Status Page" },
        { href: "mailto:marcel@wanderer.moe", label: "Contact" },
    ],
    legal: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "mailto:legal@wanderer.moe", label: "Legal Inquiries" },
        { href: "mailto:dmca@wanderer.moe", label: "DMCA Requests" },
    ],
};

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
                            <GitHubStar />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                        <FooterSection
                            title="Socials"
                            links={footerLinks.socials}
                        />
                        <FooterSection
                            title="Other"
                            links={footerLinks.other}
                        />
                        <FooterSection
                            title="Legal"
                            links={footerLinks.legal}
                        />
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
                                className="text-primary hover:text-muted-foreground transition-all duration-150"
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
