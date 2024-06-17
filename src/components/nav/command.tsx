"use client";

import { getGames } from "~/lib/api/client";
import * as React from "react";
import {
    X as CloseIcon,
    CornerDownLeft,
    ArrowUpDown,
    Search,
} from "lucide-react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "~/components/ui/command";
import { Button } from "../ui/button";
import { GamesRoute } from "~/lib/types";
import { FormatCategoryName, FormatGameName } from "~/lib/format";
import { useRouter } from "next/navigation";

export function CommandSearch() {
    const [games, setGames] = React.useState<GamesRoute["games"]>([]);
    const [open, setOpen] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    React.useEffect(() => {
        getGames().then((res) => setGames(res.response.games));
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant={"outline"}>
                <Search size={16} />
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for games or asset categories..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Games">
                        {games.map((game) => (
                            <CommandItem
                                key={game.name}
                                onSelect={() =>
                                    runCommand(() =>
                                        router.push(`/${game.name}`),
                                    )
                                }
                                className="transition-150 transition-all"
                            >
                                <img
                                    src={`https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/${game.name}/icon.png`}
                                    alt={game.name}
                                    className="h-8 w-8 mr-2 rounded-md"
                                />
                                <span>{FormatGameName(game.name)}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Categories">
                        {games.map((game) =>
                            game.subfolders.map((subfolder) => (
                                <CommandItem
                                    className="transition-150 transition-all"
                                    key={game.name + subfolder.name}
                                    onSelect={() =>
                                        runCommand(() =>
                                            router.push(
                                                `/${game.name}/${subfolder.name}`,
                                            ),
                                        )
                                    }
                                >
                                    <img
                                        src={`https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/${game.name}/icon.png`}
                                        alt={game.name}
                                        className="h-8 w-8 mr-2 rounded-md"
                                    />
                                    <span className="flex flex-col">
                                        <span className="">
                                            {FormatCategoryName(subfolder.name)}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {FormatGameName(game.name)}
                                        </span>
                                    </span>
                                </CommandItem>
                            )),
                        )}
                    </CommandGroup>
                    {/* <CommandSeparator /> */}
                </CommandList>
                <CommandSeparator />
                <div className="text-muted-foreground flex gap-4 text-sm p-3 justify-end">
                    <div className="flex flex-row gap-1 items-center">
                        <ArrowUpDown
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Navigate
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CornerDownLeft
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Select
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CloseIcon
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Close
                    </div>
                </div>
            </CommandDialog>
        </>
    );
}
