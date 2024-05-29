"use client";
import * as React from "react";
import { GamesRoute } from "~/lib/types";
import Link from "next/link";
import { FormatGameName } from "~/lib/format";
import { timeAgo } from "~/lib/time";
import { Skeleton } from "../ui/skeleton";

function GamesSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
                <Skeleton key={i} className="h-[150px]" />
            ))}
        </div>
    );
}

export function GamesGrid() {
    const [games, setGames] = React.useState<GamesRoute["games"]>([]);

    React.useEffect(() => {
        fetch("https://api.wanderer.moe/games")
            .then((res) => res.json())
            .then((data: GamesRoute) => {
                let sortedGames = data.games.sort(
                    (a, b) =>
                        new Date(b.lastUploaded).getTime() -
                        new Date(a.lastUploaded).getTime(),
                );
                setGames(sortedGames);
            });
    }, []);

    return (
        <div>
            <div className="flex flex-col mb-4">
                <h2 className="text-xl font-semibold">Games</h2>
                <p className="text-sm text-muted-foreground">
                    All games currently available on wanderer.moe
                </p>
            </div>
            {games.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {games.map((game, i) => (
                        <GameEntry key={game.name + i} game={game} />
                    ))}
                </div>
            ) : (
                <GamesSkeleton />
            )}
        </div>
    );
}

interface GameEntryProps {
    game: GamesRoute["games"][0];
}

export function GameEntry({ game }: GameEntryProps) {
    return (
        <div>
            <Link href={`/${game.name}`}>
                <div className="relative rounded-lg group ease-linear transition-all duration-150 ring-2 ring-transparent hover:ring-primary">
                    <div className="absolute bottom-1 left-1 right-0 p-2 rounded-b-lg z-10">
                        <div className="flex items-center space-x-2">
                            <div className="flex flex-col">
                                <h2 className="text-white font-semibold">
                                    {FormatGameName(game.name)}
                                </h2>
                                <p className="text-xs text-muted-foreground font-semibold">
                                    Updated {timeAgo(game.lastUploaded)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="rounded-lg object-cover object-offset-center h-[150px] opacity-40"
                        src={`https://cdn.wanderer.moe/cdn-cgi/image/width=500,height=240,quality=75/${game.name}/cover.png`}
                        width={500}
                        height={240}
                        alt={game.name}
                    />
                </div>
            </Link>
        </div>
    );
}
