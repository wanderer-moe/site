"use client";

import { Button } from "~/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDiscordUsers } from "~/lib/api/client";

export function DiscordStatus() {
    const [currentMembers, setCurrentMembers] = useState<number>(0);

    useEffect(() => {
        getDiscordUsers().then((data) => {
            setCurrentMembers(data.response.guild.memberCount);
        });
    }, []);

    return (
        <Link href="https://discord.gg/659KAFfNd6">
            <Button variant="outline" className="group w-full">
                <span className="relative flex items-center">
                    <DiscordLogoIcon
                        className={`${
                            currentMembers == 0
                                ? "text-red-200"
                                : "text-green-200"
                        } absolute stroke-2 opacity-100 
                            duration-300 group-hover:rotate-[360deg] 
                            group-hover:scale-[1.5]
                            group-hover:opacity-0`}
                        fill="currentColor"
                    />
                    <DiscordLogoIcon
                        className={`${
                            currentMembers == 0
                                ? "text-red-200"
                                : "text-green-200"
                        } mr-2 stroke-2 duration-300 
                        group-hover:rotate-[360deg]`}
                        fill="currentColor"
                    />{" "}
                    Discord: {currentMembers == 0 ? "Unknown" : currentMembers}{" "}
                    members
                </span>
            </Button>
        </Link>
    );
}
