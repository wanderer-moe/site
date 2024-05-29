"use client";

import { Button } from "~/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DiscordStatus() {
    const [members, setMembers] = useState<number | string>("Unknown");
    useEffect(() => {
        fetch(`https://discord.com/api/guilds/982385887000272956/widget.json`)
            .then((res) => res.json())
            .then((data) => {
                setMembers(
                    data.id === "982385887000272956"
                        ? data.presence_count
                        : "unknown",
                );
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <Link href="https://discord.gg/659KAFfNd6">
            <Button variant="outline" className="group w-full">
                <span className="relative flex items-center">
                    <DiscordLogoIcon
                        className={`${
                            members === "unknown"
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
                            members === "unknown"
                                ? "text-red-200"
                                : "text-green-200"
                        } mr-2 stroke-2 duration-300 
                        group-hover:rotate-[360deg]`}
                        fill="currentColor"
                    />{" "}
                    Discord: {members} online
                </span>
            </Button>
        </Link>
    );
}
