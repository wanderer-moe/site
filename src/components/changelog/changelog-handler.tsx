"use client";

import { useEffect, useState } from "react";
import { getChangeLog } from "~/lib/api/client";
import { Skeleton } from "~/components/ui/skeleton";
import { Card } from "~/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "~/components/ui/tooltip";
import { ChangeLogRoute, DiscordUser } from "~/lib/types";
import Image from "next/image";
import Link from "next/link";

function ChangelogSkeleton({ toShow }: { toShow: number }) {
    return (
        <div className="flex flex-col gap-4">
            {[...Array(toShow)].map((_, i) => (
                <Skeleton key={i} className="h-[90px]" />
            ))}
        </div>
    );
}

interface ChangelogHandlerProps {
    toShow?: number;
}

export function ChangelogHandler({ toShow }: ChangelogHandlerProps) {
    const [changelog, setChangelog] = useState<ChangeLogRoute["messages"]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getChangeLog()
            .then((data) => {
                setChangelog(data.response.messages);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching changelog:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <ChangelogSkeleton toShow={toShow ?? 12} />;
    }

    const removeFromContent = [
        "<@&1183155621286117436>",
        "<@&1183155518714429590>",
        "<@&1183155729960546306>",
    ];

    const formatContent = (content: string, mentions: DiscordUser[]) => {
        const urlRegex = /<(https?:\/\/[^\s]+)>/g;
        const boldRegex = /\*\*(.*?)\*\*/g;
        const mentionRegex = /<@(\d+)>/g;
        const emoteRegex = /<a?:\w+:\d+>/g;
        const channelRegex = /<#\d+>/g;

        let formattedContent = content.replace(emoteRegex, "");
        formattedContent = formattedContent.replace(
            channelRegex,
            "[server channel]",
        );

        formattedContent = formattedContent.replace(urlRegex, (match, url) => {
            return `<URL>${url}</URL>`;
        });

        formattedContent = formattedContent.replace(
            boldRegex,
            (match, text) => {
                return `<BOLD>${text}</BOLD>`;
            },
        );

        formattedContent = formattedContent.replace(
            mentionRegex,
            (match, userId) => {
                const mentionedUser = mentions.find(
                    (user) => user.id === userId,
                );
                return mentionedUser
                    ? `<MENTION>${userId}:${mentionedUser.username}:${mentionedUser.global_name}</MENTION>`
                    : match;
            },
        );

        return formattedContent
            .split(
                /(<URL>.*?<\/URL>|<BOLD>.*?<\/BOLD>|<MENTION>.*?<\/MENTION>)/,
            )
            .map((part, index) => {
                if (part.startsWith("<URL>") && part.endsWith("</URL>")) {
                    const url = part.slice(5, -6);
                    return (
                        <Link
                            key={index}
                            href={url}
                            className="text-primary transition-150 transition-all ease-linear hover:text-muted-foreground"
                            prefetch={false}
                        >
                            {url}
                        </Link>
                    );
                } else if (
                    part.startsWith("<BOLD>") &&
                    part.endsWith("</BOLD>")
                ) {
                    return (
                        <span key={index} className="font-bold text-primary">
                            {part.slice(6, -7)}
                        </span>
                    );
                } else if (
                    part.startsWith("<MENTION>") &&
                    part.endsWith("</MENTION>")
                ) {
                    const [userId, username, global_name] = part
                        .slice(9, -10)
                        .split(":");
                    return (
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        key={index}
                                        href={`https://discord.com/users/${userId}`}
                                        className="text-primary transition-150 transition-all ease-linear hover:text-muted-foreground"
                                        prefetch={false}
                                    >
                                        @{global_name}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>@{username}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    );
                }
                return <span key={index}>{part}</span>;
            });
    };

    if (!changelog) {
        return (
            <p className="text-destructive text-xs">
                Unable to load changelog, try again later
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {changelog.length > 0 ? (
                changelog.slice(0, toShow).map((message) => (
                    <Card
                        className="p-4 text-muted-foreground"
                        key={message.id}
                    >
                        <div className="flex flex-col gap-1">
                            <div className="w-full flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-1">
                                    <Image
                                        src={`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`}
                                        alt={message.author.username}
                                        width={20}
                                        className="rounded-full"
                                        height={20}
                                    />
                                    <p className="text-sm text-primary">
                                        {message.author.username}
                                    </p>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {new Date(
                                        message.timestamp,
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="text-xs">
                                {message.content
                                    .replace(
                                        new RegExp(
                                            removeFromContent.join("|"),
                                            "g",
                                        ),
                                        "",
                                    )
                                    .split("\n")
                                    .map((line, index) => (
                                        <p key={index}>
                                            {formatContent(
                                                line,
                                                message.mentions,
                                            )}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </Card>
                ))
            ) : (
                <p>No changelog entries available.</p>
            )}
        </div>
    );
}

export function HomeChangelogHandler() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold">Changelog</h2>
                <p className="text-muted-foreground text-sm">
                    wanderer.moe's most recent changes, fetched from Discord
                </p>
            </div>
            <ChangelogHandler toShow={2} />
        </div>
    );
}
