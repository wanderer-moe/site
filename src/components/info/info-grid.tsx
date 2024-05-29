import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Card } from "../ui/card";
import { ArrowRight, TwitterIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export function DiscordInfo() {
    return (
        <Link href="https://discord.gg/659KAFfNd6">
            <Card className="group p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <DiscordLogoIcon className="h-5 w-5" />
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        Discord
                        <ArrowRight
                            size={16}
                            className="text-primary group-hover:translate-x-1 transition-all ease-linear"
                        />
                    </h2>
                </div>
                <div className="flex text-sm justify-between items-center gap-2">
                    <p className="text-muted-foreground">
                        Join the Discord to keep up-to-date with development &
                        updates.
                    </p>
                </div>
            </Card>
        </Link>
    );
}

export function GithubInfo() {
    return (
        <Link href="https://git.wanderer.moe">
            <Card className="p-4 group rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <GithubIcon size={20} />
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        GitHub
                        <ArrowRight
                            size={16}
                            className="text-primary group-hover:translate-x-1 transition-all ease-linear"
                        />
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
            <Card className="p-4 group rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <TwitterLogoIcon className="h-5 w-5" />
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        Twitter
                        <ArrowRight
                            size={16}
                            className="text-primary group-hover:translate-x-1 transition-all ease-linear"
                        />
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
                <h2 className="text-xl font-semibold">Other</h2>
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
