"use client";

import Link from "next/link";
import {
    HomeIcon,
    GalleryVertical,
    BookmarkIcon,
    HistoryIcon,
    DownloadIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Saved", href: "/saved", icon: BookmarkIcon },
    { name: "Downloads", href: "/download-history", icon: DownloadIcon },
    { name: "Changelog", href: "/changelog", icon: GalleryVertical },
    {
        name: "Discord",
        href: "https://discord.gg/659KAFfNd6",
        icon: DiscordLogoIcon,
        offsite: true,
    },
];

export function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t z-50">
            <div className="flex justify-between items-center h-16">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        prefetch={false}
                        target={item.offsite ? "_blank" : undefined}
                        className={`flex flex-col items-center justify-between flex-1 py-1 ${
                            pathname === item.href
                                ? "text-primary"
                                : "text-muted-foreground"
                        }`}
                    >
                        {item.icon === DiscordLogoIcon ? (
                            <DiscordLogoIcon
                                fill={
                                    pathname === item.href
                                        ? "currentColor"
                                        : "none"
                                }
                                className="size-5"
                            />
                        ) : (
                            <item.icon
                                size={20}
                                fill={
                                    pathname === item.href
                                        ? "currentColor"
                                        : "none"
                                }
                            />
                        )}
                        <span className="text-xs mt-1">{item.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
