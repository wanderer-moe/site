import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";

export function NavSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <Menu size={16} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex flex-row gap-1 items-center">
                            <Image
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
                    <Link href="/">
                        <Button className="w-full" variant="ghost">
                            Home
                        </Button>
                    </Link>
                    <Separator />
                    <Link href="https://discord.wanderer.moe/">
                        <Button className="w-full" variant="ghost">
                            Discord
                        </Button>
                    </Link>
                    <Link href="https://x.com/wanderermoe">
                        <Button className="w-full" variant="ghost">
                            Twitter (X)
                        </Button>
                    </Link>
                    <Link href="https://git.wanderer.moe/">
                        <Button className="w-full" variant="ghost">
                            GitHub
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}
