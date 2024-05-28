import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Card } from "../ui/card";
import { TwitterIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export function DiscordInfo() {
    return (
        <Link href="https://discord.gg/659KAFfNd6">
            <Card className="p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-row items-center gap-1">
                    <h2 className="text-lg font-semibold flex flex-row gap-1 items-center">
                        <DiscordLogoIcon className="h-4 w-4 translate-y-[1px]" />
                        Discord Server
                    </h2>
                </div>
                <div className="flex text-sm justify-between items-center gap-2">
                    <p className="text-muted-foreground">
                        Join the Discord to keep up-to-date with development,
                        updates & get involved with the community.
                    </p>
                </div>
            </Card>
        </Link>
    );
}

export function GithubInfo() {
    return (
        <Link href="https://git.wanderer.moe">
            <Card className="p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-row items-center gap-1">
                    <h2 className="text-lg font-semibold flex flex-row gap-1 items-center">
                        <GithubIcon className="h-4 w-4 translate-y-[1px]" />
                        GitHub
                    </h2>
                </div>
                <div className="flex text-sm justify-between items-center gap-2">
                    <p className="text-muted-foreground">
                        wanderer.moe and all retrospective microservices are
                        open-source.
                    </p>
                </div>
            </Card>
        </Link>
    );
}

export function TwitterInfo() {
    return (
        <Link href="https://x.com/wanderermoe">
            <Card className="p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-row items-center gap-1">
                    <h2 className="text-lg font-semibold flex flex-row gap-1 items-center">
                        <TwitterIcon className="h-4 w-4 translate-y-[1px]" />
                        Twitter
                    </h2>
                </div>
                <div className="flex text-sm justify-between items-center gap-2">
                    <p className="text-muted-foreground">
                        Follow the official Twitter (X) account for updates and
                        announcements.
                    </p>
                </div>
            </Card>
        </Link>
    );
}

export function InfoGrid() {
    return (
        <div>
            <div className="flex flex-col mb-4">
                <h2 className="text-xl font-bold">Other</h2>
                <p className="text-sm text-muted-foreground">
                    Socials and other information regarding wanderer.moe
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DiscordInfo />
                <TwitterInfo />
                <GithubInfo />
            </div>
        </div>
    );
}
