"use client";

import Link from "next/link";

import { ArrowRightIcon } from "lucide-react";
import { AssetDownloadIndicator } from "../asset/download-indicator";
import { CommandSearch } from "./command";

export default function NavBar() {
    return (
        <header className="top-0 bg-background/90 backdrop-blur-sm border-b sticky z-50">
            {/* <div className="p-2 text-xs bg-destructive hover:bg-destructive/90 justify-center text-center text-primary group flex gap-1 items-center transition-all duration-150 ease-linear">
                wanderer.moe will be undergoing heavy updates for the next
                couple days - the site will stay up, bugs may occur!{" "}
            </div> */}
            <nav className="flex justify-between tems-center max-w-screen-xl px-5 py-2 mx-auto">
                <Link href="/" className="text-lg font-semibold">
                    <div className="flex flex-row gap-1 items-center">
                        <img
                            src="/logo.png"
                            alt="wanderer.moe"
                            className="translate-y-[2px]"
                            width={32}
                            height={32}
                        />
                    </div>
                </Link>
                <div className="flex flex-row gap-2 items-center">
                    <AssetDownloadIndicator />
                    <CommandSearch />
                </div>
            </nav>
        </header>
    );
}
