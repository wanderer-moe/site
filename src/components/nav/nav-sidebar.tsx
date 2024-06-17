import { Home, Menu, Scale, Scroll } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import Link from "next/link";
import {
    DiscordLogoIcon,
    GitHubLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";

export function NavSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Menu size={16} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex flex-row gap-1 items-center">
                            <img
                                src="/logo.png"
                                alt="wanderer.moe"
                                width={32}
                                height={32}
                            />
                            <h3 className="translate-y-[-2px]">wanderer.moe</h3>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-8 text-muted-foreground flex flex-col gap-2">
                    <Link href="/" className="text-left" prefetch={false}>
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <Home className="h-5 w-5 mr-2 inline" />
                            Home
                        </Button>
                    </Link>
                    <Link href="/privacy-policy">
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <Scale className="h-5 w-5 mr-2 inline" />
                            Privacy Policy
                        </Button>
                    </Link>
                    <Link href="/changelog">
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <Scroll className="h-5 w-5 mr-2 inline" />
                            Changelog
                        </Button>
                    </Link>
                    <Link href="https://discord.wanderer.moe/" prefetch={false}>
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <DiscordLogoIcon className="h-5 w-5 mr-2 inline" />
                            Discord
                        </Button>
                    </Link>
                    <Link href="https://x.com/wanderermoe">
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <TwitterLogoIcon className="h-5 w-5 mr-2 inline" />
                            Twitter (X)
                        </Button>
                    </Link>
                    <Link href="https://git.wanderer.moe/">
                        <Button
                            className="w-full justify-start "
                            variant="ghost"
                        >
                            <GitHubLogoIcon className="h-5 w-5 mr-2 inline" />
                            GitHub
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}
