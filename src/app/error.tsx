"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
    title: "internal server error // wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function Error() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-end gap-2">
                    <h1 className="text-4xl font-semibold">500</h1>
                    <p className="text-lg text-muted-foreground">
                        Internal Server Error
                    </p>
                </div>
                <p className="text-sm text-muted-foreground">
                    This wasn&apos;t supposed to happen. Refresh the page & try
                    again later.
                </p>
                <Link href="/">
                    <Button variant="outline">Go Home</Button>
                </Link>
            </div>
        </main>
    );
}
