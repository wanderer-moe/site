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
    DialogTrigger,
} from "~/components/ui/dialog";

export function AssetItem({
    asset,
    game,
    category,
}: {
    asset: Asset;
    game: string;
    category: string;
}) {
    // function getImageResolution(imagePath: string) {
    //     if (typeof window !== "undefined") {
    //         const img = new Image();
    //         const canvas = document.createElement("canvas");
    //         const ctx = canvas.getContext("2d");
    //         img.src = imagePath;
    //         canvas.width = img.width;
    //         canvas.height = img.height;
    //         return `${canvas.width}x${canvas.height}`;
    //     } else {
    //         return "Unknown Resolution";
    //     }
    // }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group p-2 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                    <div className="flex items-center justify-center">
                        <img
                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/${game}/${category}/${asset.name}.png`}
                            alt={asset.name}
                            className="h-36 max-h-36 w-36 max-w-36 object-contain p-1"
                        />
                    </div>
                    <div className="flex flex-col mt-2 p-2">
                        <p className="font-semibold line-clamp-1 text-ellipsis">
                            {asset.name}
                        </p>
                        <div className="text-muted-foreground flex text-sm justify-between items-center">
                            <p>{timeAgo(asset.uploaded)}</p>
                            <p>{bytesToFileSize(asset.size)}</p>
                        </div>
                    </div>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-xs">{asset.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="flex items-center justify-center">
                        <img
                            src={`https://cdn.wanderer.moe/${game}/${category}/${asset.name}.png`}
                            alt={asset.name}
                            className="rounded-md h-[40vh] object-contain"
                        />
                    </div>
                </DialogDescription>
                <DialogFooter>
                    <div className="flex flex-col w-full gap-2">
                        <p className="text-muted-foreground text-center text-sm">
                            On mobile? Press and hold on the asset above to
                            save.
                        </p>
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
