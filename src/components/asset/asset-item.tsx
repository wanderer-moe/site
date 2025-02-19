"use client";

import type { Asset } from "~/lib/types";
import { Card } from "../ui/card";
import { timeAgo } from "~/lib/time";
import { bytesToFileSize } from "~/lib/format";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";
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
    const selectMode = useAppSelector((state) => getSelectMode(state.assets));

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectMode) {
            dispatch(toggleAssetSelection(asset));
        } else {
            setDialogOpen(true);
        }
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
                        <Button
                            size="icon"
                            className="rounded-full absolute bottom-1 right-1 transition-opacity opacity-0 md:group-hover:opacity-100"
                            onClick={(e) => {
                                e.stopPropagation();
                                setDialogOpen(true);
                            }}
                        >
                            <DownloadIcon size={16} />
                        </Button>
                    </div>
                </Card>
                <p className="line-clamp-1 text-ellipsis">{asset.name}</p>
            </div>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{asset.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="relative flex items-center justify-center">
                        <img
                            src={`https://cdn.wanderer.moe/${game}/${category}/${asset.name}.png`}
                            alt={asset.name}
                            className="rounded-md h-[40vh] object-contain"
                        />
                    </div>
                </DialogDescription>
                <DialogFooter>
                    <div className="flex flex-col w-full gap-2">
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
