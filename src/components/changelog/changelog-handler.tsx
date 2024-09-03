"use client";

import { useEffect, useState } from "react";
import { getChangeLog } from "~/lib/api/client";
import { Skeleton } from "~/components/ui/skeleton";
import { Card } from "~/components/ui/card";
import { ChangeLogRoute, DiscordUser } from "~/lib/types";
import Image from "next/image";
import Link from "next/link";

function ChangelogSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            {[...Array(12)].map((_, i) => (
                <Skeleton key={i} className="h-[150px]" />
            ))}
        </div>
    );
}

export function ChangelogHandler() {
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
        return <ChangelogSkeleton />;
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
        formattedContent = formattedContent.replace(channelRegex, "[channel]");

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
                    ? `<MENTION>${userId}:${mentionedUser.username}</MENTION>`
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
                    const [userId, username] = part.slice(9, -10).split(":");
                    return (
                        <Link
                            key={index}
                            href={`https://discord.com/users/${userId}`}
                            className="text-primary transition-150 transition-all ease-linear hover:text-muted-foreground"
                            prefetch={false}
                        >
                            @{username}
                        </Link>
                    );
                }
                return <span key={index}>{part}</span>;
            });
    };

    return (
        <div className="flex flex-col gap-4">
            {changelog.length > 0 ? (
                changelog.map((message) => (
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
                                        width={24}
                                        className="rounded-full"
                                        height={24}
                                    />
                                    <p className="text-primary">
                                        {message.author.username}
                                    </p>
                                </div>
                                <p className="text-muted-foreground">
                                    {new Date(
                                        message.timestamp,
                                    ).toLocaleDateString()}
                                </p>
                            </div>
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
                                        {formatContent(line, message.mentions)}
                                    </p>
                                ))}
                        </div>
                    </Card>
                ))
            ) : (
                <p>No changelog entries available.</p>
            )}
        </div>
    );
}
