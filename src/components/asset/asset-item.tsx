"use client";

import type { Asset } from "~/lib/types";
import { Card } from "../ui/card";
import { timeAgo } from "~/lib/time";
import { bytesToFileSize } from "~/lib/format";
import { Button } from "../ui/button";
import { DownloadIcon, BookmarkIcon, BookmarkCheckIcon } from "lucide-react";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "~/redux/store";
import {
    toggleAssetSelection,
    isAssetSelected,
    getSelectMode,
} from "~/redux/slice/asset-slice";
import {
    toggleSavedAsset,
    isAssetSaved,
} from "~/redux/slice/saved-assets-slice";
import { Badge } from "../ui/badge";
import { toast } from "sonner";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function AssetItem({
    asset,
    game,
    category,
}: Readonly<{
    asset: Asset;
    game: string;
    category: string;
}>) {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const isSelected = useAppSelector((state) =>
        isAssetSelected(state.assets, asset),
    );
    const isSaved = useAppSelector((state) =>
        isAssetSaved(state.savedAssets, asset),
    );
    const selectMode = useAppSelector((state) => getSelectMode(state.assets));

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectMode) {
            dispatch(toggleAssetSelection(asset));
        } else {
            setDialogOpen(true);
        }
    };

    const handleSaveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(toggleSavedAsset(asset));
        toast.success(
            isSaved
                ? "Asset removed from saved items"
                : "Asset added to saved items",
        );
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <div className="flex flex-col gap-2">
                <Card
                    className={`group p-2 rounded-lg ring-2 ease-linear transition-all cursor-pointer ${isSelected ? "ring-primary" : "ring-transparent"} hover:ring-primary`}
                    onClick={handleClick}
                >
                    <div className="flex items-center justify-center relative">
                        <img
                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=128,quality=50/${game}/${category}/${asset.name}.png`}
                            alt={asset.name}
                            className="object-contain p-1"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0" />
                        <div className="absolute bottom-1 right-1 flex flex-row gap-1">
                            <Button
                                size="icon"
                                className="rounded-full transition-opacity opacity-0 md:group-hover:opacity-100"
                                onClick={handleSaveClick}
                            >
                                {isSaved ? (
                                    <BookmarkCheckIcon size={16} />
                                ) : (
                                    <BookmarkIcon size={16} />
                                )}
                            </Button>
                            <Button
                                size="icon"
                                className="rounded-full transition-opacity opacity-0 md:group-hover:opacity-100"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDialogOpen(true);
                                }}
                            >
                                <DownloadIcon size={16} />
                            </Button>
                        </div>
                    </div>
                </Card>
                <div className="flex items-center gap-2">
                    {asset.name.includes("fanmade") && (
                        <Badge
                            variant="outline"
                            className="w-fit text-md bg-[#BFB7D6]/20 border-[#BFB7D6]/40"
                        >
                            Fanmade
                        </Badge>
                    )}
                    <p className="line-clamp-1 text-ellipsis">
                        {asset.name.includes("fanmade")
                            ? asset.name
                                  .replace("fanmade", "")
                                  .replace(/--+/g, "-")
                                  .replace(/^-+|-+$/g, "")
                            : asset.name}
                    </p>
                </div>
            </div>
            <DialogContent aria-describedby={undefined}>
                <DialogHeader>
                    <VisuallyHidden>
                        <DialogTitle></DialogTitle>
                    </VisuallyHidden>
                    <div className="flex items-center gap-2">
                        {asset.name.includes("fanmade") && (
                            <Badge
                                variant="outline"
                                className="w-fit text-md bg-[#BFB7D6]/20 border-[#BFB7D6]/40"
                            >
                                Fanmade
                            </Badge>
                        )}
                        <p className="line-clamp-1 text-ellipsis">
                            {asset.name.includes("fanmade")
                                ? asset.name
                                      .replace("fanmade", "")
                                      .replace(/--+/g, "-")
                                      .replace(/^-+|-+$/g, "")
                                : asset.name}
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                        {asset.size && bytesToFileSize(asset.size)}
                    </p>
                </DialogHeader>
                <div className="relative flex items-center justify-center">
                    <img
                        src={`https://cdn.wanderer.moe/${game}/${category}/${asset.name}.png`}
                        alt={asset.name}
                        className="rounded-md h-[40vh] object-contain"
                    />
                </div>
                <DialogFooter>
                    <div className="flex flex-col w-full gap-2">
                        <Button
                            variant="secondary"
                            className="w-full"
                            onClick={handleSaveClick}
                        >
                            {isSaved ? (
                                <>
                                    <BookmarkCheckIcon
                                        size={16}
                                        className="mr-2"
                                    />
                                    Unsave Asset
                                </>
                            ) : (
                                <>
                                    <BookmarkIcon size={16} className="mr-2" />
                                    Save Asset
                                </>
                            )}
                        </Button>
                        <Link
                            prefetch={false}
                            href={asset.path}
                            target="_blank"
                            className="w-full"
                            download
                        >
                            <Button className="w-full">
                                <DownloadIcon
                                    size={16}
                                    className="inline mr-2"
                                />
                                Download
                            </Button>
                        </Link>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
