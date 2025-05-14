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
import {
    Ellipsis,
    FilterIcon,
    LinkIcon,
    ToggleRight,
    SquareMousePointer,
    Eye,
    ArrowUpDown,
} from "lucide-react";
import { toast } from "sonner";
import Masonry from "react-masonry-css";
import { useAppDispatch, useAppSelector } from "~/redux/store";

import {
    toggleAssetSelection,
    isAssetSelected,
    toggleSelectMode,
    getSelectMode,
} from "~/redux/slice/asset-slice";
import { FormatCategoryName, FormatGameName } from "~/lib/format";

interface AssetHandlerProps {
    assets: Asset[];
    game: string;
    category: string;
}

function filterAndSortAssets(
    assets: Asset[],
    filter: string,
    sort: string,
    search: string,
): Asset[] {
    let filtered = assets;

    // Filtering
    if (filter === "Official") {
        filtered = filtered.filter((asset) => !asset.name.includes("fanmade"));
    } else if (filter === "Fanmade") {
        filtered = filtered.filter((asset) => asset.name.includes("fanmade"));
    }

    filtered = filtered.filter((asset) =>
        asset.name
            .toLowerCase()
            .includes(search.toLowerCase().replace(" ", "-")),
    );

    switch (sort) {
        case "A-Z":
            filtered = [...filtered].sort((a, b) =>
                a.name.localeCompare(b.name),
            );
            break;
        case "Z-A":
            filtered = [...filtered].sort((a, b) =>
                b.name.localeCompare(a.name),
            );
            break;
        case "Newest":
            filtered = [...filtered].sort(
                (a, b) =>
                    new Date(b.uploaded).getTime() -
                    new Date(a.uploaded).getTime(),
            );
            break;
        case "Oldest":
            filtered = [...filtered].sort(
                (a, b) =>
                    new Date(a.uploaded).getTime() -
                    new Date(b.uploaded).getTime(),
            );
            break;
        case "File Size":
            filtered = [...filtered].sort((a, b) => b.size - a.size);
            break;
        default:
            break;
    }

    return filtered;
}

export function AssetHandler({
    assets,
    game,
    category,
}: Readonly<AssetHandlerProps>) {
    const [search, setSearch] = React.useState<string>("");
    const [sort, setSort] = React.useState<string>("Newest");
    const [filter, setFilter] = React.useState<string>("All");
    const sortList = ["Newest", "Oldest", "A-Z", "Z-A", "File Size"];
    const filterList = ["All", "Official", "Fanmade"];

    const filteredAssets = React.useMemo(
        () => filterAndSortAssets(assets, filter, sort, search),
        [assets, filter, sort, search],
    );

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 2,
    };

    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex sm:flex-row flex-col gap-2">
                <div className="flex-1">
                    <Input
                        type="search"
                        className="bg-background w-full"
                        placeholder="Search assets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex flex-row gap-2 max-sm:w-full">
                    <Button
                        variant={"secondary"}
                        onClick={() => dispatch(toggleSelectMode())}
                        className="relative group max-sm:w-full min-w-[120px] flex items-center"
                    >
                        {useAppSelector((state) =>
                            getSelectMode(state.assets),
                        ) ? (
                            <SquareMousePointer
                                className={`w-4 h-4 mr-2 transition-transform`}
                            />
                        ) : (
                            <Eye
                                className={`w-4 h-4 mr-2 transition-transform`}
                            />
                        )}
                        {useAppSelector((state) => getSelectMode(state.assets))
                            ? "Mode: Multi-Select"
                            : "Mode: View"}
                    </Button>
                    <SortOptions
                        sort={sort}
                        setSort={setSort}
                        sortList={sortList}
                    />
                    <FilterOptions
                        filter={filter}
                        setFilter={setFilter}
                        filterList={filterList}
                    />
                    <MoreOptions
                        assets={filteredAssets}
                        game={game}
                        category={category}
                    />
                </div>
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
                {allSelected ? "Deselect All" : "Select All"}
            </div>
        </DropdownMenuItem>
    );
}

function SortOptions({
    sort,
    setSort,
    sortList,
}: {
    sort: string;
    setSort: (s: string) => void;
    sortList: string[];
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="" variant={"outline"}>
                    <div className="flex flex-row gap-2 items-center">
                        <ArrowUpDown size={16} className="translate-y-[1px]" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                    {sortList.map((sortOption) => (
                        <DropdownMenuRadioItem
                            key={sortOption}
                            value={sortOption}
                        >
                            {sortOption}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function FilterOptions({
    filter,
    setFilter,
    filterList,
}: {
    filter: string;
    setFilter: (f: string) => void;
    filterList: string[];
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="" variant={"outline"}>
                    <div className="flex flex-row gap-2 items-center">
                        <FilterIcon size={16} className="translate-y-[1px]" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Filter</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={filter}
                    onValueChange={setFilter}
                >
                    {filterList.map((filterOption) => (
                        <DropdownMenuRadioItem
                            key={filterOption}
                            value={filterOption}
                        >
                            {filterOption}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
