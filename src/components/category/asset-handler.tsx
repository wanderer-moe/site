"use client";

import { AssetItem } from "../asset/asset-item";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as React from "react";
import { Asset } from "~/lib/types";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface AssetHandlerProps {
    assets: Asset[];
    game: string;
    category: string;
}

function filterAssets(
    assets: Asset[],
    filter: string,
    search: string,
): Asset[] {
    let filteredAssets: Asset[];

    switch (filter) {
        case "A-Z":
            filteredAssets = [...assets].sort((a, b) =>
                a.name.localeCompare(b.name),
            );
            break;
        case "Z-A":
            filteredAssets = [...assets].sort((a, b) =>
                b.name.localeCompare(a.name),
            );
            break;
        case "Newest":
            filteredAssets = [...assets].sort(
                (a, b) =>
                    new Date(b.uploaded).getTime() -
                    new Date(a.uploaded).getTime(),
            );
            break;
        case "Oldest":
            filteredAssets = [...assets].sort(
                (a, b) =>
                    new Date(a.uploaded).getTime() -
                    new Date(b.uploaded).getTime(),
            );
            break;
        case "File Size":
            filteredAssets = [...assets].sort((a, b) => b.size - a.size);
            break;
        default:
            filteredAssets = assets;
    }

    return filteredAssets.filter((asset) =>
        asset.name
            .toLowerCase()
            .includes(search.toLowerCase().replace(" ", "-")),
    );
}

export function AssetHandler({
    assets,
    game,
    category,
}: Readonly<AssetHandlerProps>) {
    const [search, setSearch] = React.useState<string>("");
    const [filter, setFilter] =
        React.useState<(typeof filterList)[number]>("Newest");
    const filterList = ["A-Z", "Z-A", "Newest", "Oldest", "File Size"];

    const filteredAssets = React.useMemo(
        () => filterAssets(assets, filter, search),
        [assets, filter, search],
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
                <Input
                    type="search"
                    className="bg-background"
                    placeholder="Search assets"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <FilterOptions
                    filter={filter}
                    setFilter={setFilter}
                    filterList={filterList}
                />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {filteredAssets.map((asset) => (
                    <AssetItem
                        key={asset.name}
                        asset={asset}
                        game={game}
                        category={category}
                    />
                ))}
            </div>
            {filteredAssets.length === 0 && (
                <div className="w-full justify-center items-center flex flex-col">
                    <p>No assets matched your search.</p>
                    <p className="text-muted-foreground text-sm flex flex-row gap-1">
                        Try searching for something else?{" "}
                        <img
                            src="https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/genshin-impact/emotes/paimon-s-paintingsset-27-6.png"
                            alt="no assets found"
                            className="h-5 w-5"
                        />
                    </p>
                </div>
            )}
        </div>
    );
}

function FilterOptions({
    filter,
    setFilter,
    filterList,
}: Readonly<{
    filter: string;
    setFilter: (filter: string) => void;
    filterList: string[];
}>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-[150px]" variant={"outline"}>
                    <div className="flex flex-row gap-2 items-center">
                        <FilterIcon size={16} className="translate-y-[1px]" />
                        {filter}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={filter}
                    onValueChange={setFilter}
                >
                    {filterList.map((filter) => (
                        <DropdownMenuRadioItem key={filter} value={filter}>
                            {filter}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
