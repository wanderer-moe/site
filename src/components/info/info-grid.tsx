import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Card } from "../ui/card";
import { ArrowRight, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

interface InfoCardProps {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function InfoCard({ href, icon, title, description }: InfoCardProps) {
    return (
        <Link href={href}>
            <Card className="group flex flex-col gap-1 p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    {icon}
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        {title}
                        <ArrowRight
                            size={16}
                            className="text-primary group-hover:translate-x-1 transition-all ease-linear"
                        />
                    </h2>
                </div>
                <div className="flex text-xs justify-between items-center gap-2">
                    <p className="text-muted-foreground">{description}</p>
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
                <InfoCard
                    href="https://discord.gg/659KAFfNd6"
                    icon={<DiscordLogoIcon className="h-5 w-5" />}
                    title="Discord"
                    description="Join the Discord to keep up-to-date with development & updates."
                />
                <InfoCard
                    href="https://x.com/wanderermoe"
                    icon={<TwitterLogoIcon className="h-5 w-5" />}
                    title="Twitter"
                    description="Follow the official Twitter (X) account for updates and announcements."
                />
                <InfoCard
                    href="https://git.wanderer.moe"
                    icon={<GithubIcon size={20} />}
                    title="GitHub"
                    description="wanderer.moe and all retrospective microservices are open-source."
                />
            </div>
        </div>
    );
}
