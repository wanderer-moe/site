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

function filterAssets(assets: Asset[], filter: string): Asset[] {
    switch (filter) {
        case "A-Z":
            return [...assets].sort((a, b) => a.name.localeCompare(b.name));
        case "Z-A":
            return [...assets].sort((a, b) => b.name.localeCompare(a.name));
        case "Newest":
            return [...assets].sort(
                (a, b) =>
                    new Date(b.uploaded).getTime() -
                    new Date(a.uploaded).getTime(),
            );
        case "Oldest":
            return [...assets].sort(
                (a, b) =>
                    new Date(a.uploaded).getTime() -
                    new Date(b.uploaded).getTime(),
            );
        case "File Size":
            return [...assets].sort((a, b) => b.size - a.size);
        default:
            return assets;
    }
}

export function AssetHandler({ assets, game, category }: AssetHandlerProps) {
    const [search, setSearch] = React.useState<string>("");
    const [filter, setFilter] =
        React.useState<(typeof filterList)[number]>("Newest");
    const filterList = ["A-Z", "Z-A", "Newest", "Oldest", "File Size"];

    const filteredAssets = React.useMemo(
        () => filterAssets(assets, filter),
        [assets, filter],
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
                <Input
                    type="search"
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
                {filteredAssets
                    .filter((asset) =>
                        asset.name.toLowerCase().includes(search.toLowerCase()),
                    )
                    .map((asset, i) => (
                        <AssetItem
                            key={i}
                            asset={asset}
                            game={game}
                            category={category}
                        />
                    ))}
            </div>
        </div>
    );
}

function FilterOptions({
    filter,
    setFilter,
    filterList,
}: {
    filter: string;
    setFilter: (filter: string) => void;
    filterList: string[];
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-[150px]" variant={"secondary"}>
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
                    {filterList.map((filter, i) => (
                        <DropdownMenuRadioItem key={i} value={filter}>
                            {filter}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
