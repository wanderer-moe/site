"use client";

import Link from "next/link";

import { NavSidebar } from "./nav-sidebar";
import { ArrowRightIcon } from "lucide-react";

export default function NavBar() {
    return (
        <header className="top-0 bg-background/90 backdrop-blur-sm border-b sticky z-50">
            {/* <Link
                href="https://crowdfund.dromzeh.dev/"
                target="_blank"
                prefetch={false}
            >
                <div className="p-2 text-sm bg-destructive hover:bg-destructive/90 justify-center text-center text-primary group flex gap-1 items-center transition-all duration-150 ease-linear">
                    wanderer.moe needs financial support to keep running{" "}
                    <ArrowRightIcon
                        size={16}
                        className="group-hover:translate-x-1 transition-all duration-150 ease-linear translate-y-[1px]"
                    />
                </div>
            </Link> */}
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
                <NavSidebar />
            </nav>
        </header>
    );
}
