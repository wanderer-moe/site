"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useLogger } from "next-axiom";
import { usePathname } from "next/navigation";
import { LogLevel } from "next-axiom/dist/logger";
import { useEffect } from "react";

export const metadata: Metadata = {
    title: "Internal Server Error • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function ErrorPage({
    error,
}: {
    error: Error & { digest?: string };
}) {
    const pathname = usePathname();
    const log = useLogger({ source: "error.tsx" });
    let status = error.message == "Invalid URL" ? 404 : 500;

    log.logHttpRequest(
        LogLevel.error,
        error.message,
        {
            host: window.location.href,
            path: pathname,
            statusCode: status,
        },
        {
            error: error.name,
            cause: error.cause,
            stack: error.stack,
            digest: error.digest,
        },
    );

    useEffect(() => {
        console.error("Page Error:", error);
    }, [error]);

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
                    This wasn&apos;t supposed to happen. Try refreshing the page
                    or try again later.
                </p>
                <div className="flex gap-4">
                    <Button
                        onClick={() => {
                            if (typeof window !== "undefined") {
                                window.sessionStorage.clear();
                            }
                            window.location.reload();
                        }}
                    >
                        Try again
                    </Button>
                    <Link href="/">
                        <Button variant="outline">Go Home</Button>
                    </Link>
                    <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                    >
                        Reload page
                    </Button>
                </div>
            </div>
        </main>
    );
}
