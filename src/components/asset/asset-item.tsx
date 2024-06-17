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

    const isSelected = isAssetSelected(
        useAppSelector((state) => state.assets),
        asset,
    );

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Card
                className={`group p-2 rounded-lg ring-2 ease-linear transition-all cursor-pointer ${isSelected ? "ring-primary" : "ring-transparent"} hover:ring-primary`}
                onDoubleClick={() => setDialogOpen(true)}
                onClick={() => dispatch(toggleAssetSelection(asset))}
            >
                <div className="flex items-center justify-center">
                    <img
                        src={`https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/${game}/${category}/${asset.name}.png`}
                        alt={asset.name}
                        className="h-36 max-h-36 w-36 max-w-36 object-contain p-1"
                        fetchPriority="high"
                    />
                </div>
                <div className="flex flex-col mt-2 p-2">
                    <p className="font-semibold line-clamp-1 text-ellipsis">
                        {asset.name}
                    </p>
                    <div className="text-muted-foreground flex text-xs justify-between items-center">
                        <p>{timeAgo(asset.uploaded)}</p>
                        <p>{bytesToFileSize(asset.size)}</p>
                    </div>
                </div>
            </Card>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-sm">
                        {asset.name}
                        <p className="text-muted-foreground text-xs">
                            On mobile? Press and hold on the asset to download.
                        </p>
                    </DialogTitle>
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
                            <Button variant={"secondary"} className="w-full">
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
