"use client";

import { AssetItem } from "../asset/asset-item";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as React from "react";
import { Asset } from "~/lib/types";
import {
    DropdownMenu,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Ellipsis, FilterIcon, LinkIcon, ToggleRight } from "lucide-react";
import { toast } from "sonner";
import Masonry from "react-masonry-css";
import { useAppDispatch, useAppSelector } from "~/redux/store";

import {
    toggleAssetSelection,
    isAssetSelected,
} from "~/redux/slice/asset-slice";
import { FormatCategoryName, FormatGameName } from "~/lib/format";

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
    switch (filter) {
        case "A-Z":
            assets.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Z-A":
            assets.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "Newest":
            assets.sort(
                (a, b) =>
                    new Date(b.uploaded).getTime() -
                    new Date(a.uploaded).getTime(),
            );
            break;
        case "Oldest":
            assets.sort(
                (a, b) =>
                    new Date(a.uploaded).getTime() -
                    new Date(b.uploaded).getTime(),
            );
            break;
        case "File Size":
            assets.sort((a, b) => b.size - a.size);
            break;
        default:
            break;
    }

    return assets.filter((asset) =>
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

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 2,
    };

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
                <MoreOptions assets={assets} game={game} category={category} />
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="asset-masonry-grid"
                columnClassName="asset-masonry-grid_column"
            >
                {filteredAssets.map((asset) => (
                    <AssetItem
                        key={asset.name}
                        asset={asset}
                        game={game}
                        category={category}
                    />
                ))}
            </Masonry>
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

function MoreOptions({ assets, game, category }: Readonly<AssetHandlerProps>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>
                    <div className="flex flex-row gap-2 items-center">
                        <Ellipsis size={16} className="translate-y-[1px]" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <SelectAllAssets
                    assets={assets}
                    game={game}
                    category={category}
                />
                <CopyLink game={game} category={category} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function CopyLink({
    game,
    category,
}: Readonly<{
    game: string;
    category: string;
}>) {
    const copyLink = () => {
        try {
            navigator.clipboard.writeText(
                `https://wanderer.moe/${game}/${category}`,
            );
            toast.success("Copied link to clipboard!");
        } catch (error) {
            console.error("Failed to copy link to clipboard", error);
            toast.error("Failed to copy link to clipboard");
        }
    };

    return (
        <DropdownMenuItem onClick={copyLink}>
            <div className="flex flex-row gap-2 items-center transition-all duration-150">
                <LinkIcon size={16} className="translate-y-[1px]" />
                Copy Link
            </div>
        </DropdownMenuItem>
    );
}

function SelectAllAssets({
    assets,
    game,
    category,
}: Readonly<{
    assets: Asset[];
    game: string;
    category: string;
}>) {
    const dispatch = useAppDispatch();
    const selectedAssets = useAppSelector((state) => state.assets);

    // Derive the checked state
    const allSelected = assets.every((asset) =>
        isAssetSelected(selectedAssets, asset),
    );

    const handleSelectAll = () => {
        if (allSelected) {
            assets.forEach((asset) => {
                if (isAssetSelected(selectedAssets, asset)) {
                    dispatch(toggleAssetSelection(asset));
                }
            });
            toast.success(
                `Deselected all ${FormatGameName(game)} ${FormatCategoryName(category)}`,
            );
        } else {
            assets.forEach((asset) => {
                if (!isAssetSelected(selectedAssets, asset)) {
                    dispatch(toggleAssetSelection(asset));
                }
            });
            toast.success(
                `Selected all ${FormatGameName(game)} ${FormatCategoryName(category)}`,
            );
        }
    };

    return (
        <DropdownMenuItem onClick={handleSelectAll}>
            <div className="flex flex-row gap-2 items-center transition-all duration-150">
                <ToggleRight size={16} className="translate-y-[1px]" />
                Toggle Selection
            </div>
        </DropdownMenuItem>
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
