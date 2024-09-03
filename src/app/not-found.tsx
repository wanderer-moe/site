import { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
    title: "Page Not Found • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function NotFound() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-end gap-2">
                    <h1 className="text-4xl font-semibold">404</h1>
                    <p className="text-lg text-muted-foreground">
                        Page not found
                    </p>
                </div>
                <p className="text-sm text-muted-foreground">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved.
                </p>
                <Link href="/">
                    <Button variant="outline">Go Home</Button>
                </Link>
            </div>
        </main>
    );
}
