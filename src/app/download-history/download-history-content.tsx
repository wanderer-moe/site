"use client";

import { useAppSelector, useAppDispatch } from "~/redux/store";
import { DescriptionImage } from "~/components/desc-image";
import { HomeIcon, BookmarkIcon, HistoryIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Link from "next/link";
import { format } from "date-fns";
import { bytesToFileSize } from "~/lib/format";
import { Button } from "~/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { setSelectedAssets } from "~/redux/slice/asset-slice";
import { toast } from "sonner";

export function DownloadHistoryContent() {
    const dispatch = useAppDispatch();
    const history = useAppSelector((state) => state.downloadHistory.history);

    const handleRedownload = (assets: (typeof history)[0]["assets"]) => {
        dispatch(setSelectedAssets(assets));
        toast.success("Assets selected for download");
    };

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link
                                    prefetch={false}
                                    className="transition-colors hover:text-foreground"
                                    href="/"
                                >
                                    <HomeIcon size={16}></HomeIcon>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    Download History
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/genshin-impact/cover.png"
                    alt="Download History"
                    title="Download History"
                    description={`${history.length} download entries`}
                />
                <div className="flex flex-col gap-4">
                    {history.map((entry) => (
                        <div
                            key={entry.id}
                            className="flex flex-col gap-2 rounded-lg border p-4"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="flex flex-row gap-2">
                                        {entry.assets
                                            .slice(0, 1)
                                            .map((asset) => (
                                                <div
                                                    className="bg-secondary rounded-md p-1"
                                                    key={asset.path}
                                                >
                                                    <img
                                                        key={asset.name}
                                                        src={`https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/${asset.path.split("/")[3]}/${asset.path.split("/")[4]}/${asset.name}.png`}
                                                        className="object-contain p-1 size-16"
                                                        alt={asset.name}
                                                        fetchPriority="high"
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="">
                                            {format(
                                                entry.timestamp,
                                                "do MMMM yyyy, h:mm a",
                                            )}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {entry.assets.length} Assets,{" "}
                                            {bytesToFileSize(entry.totalSize)}{" "}
                                            Total
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="secondary"
                                    className="w-full md:w-auto"
                                    onClick={() =>
                                        handleRedownload(entry.assets)
                                    }
                                >
                                    <DownloadIcon size={16} className="mr-2" />
                                    Select All
                                </Button>
                            </div>
                        </div>
                    ))}
                    {history.length === 0 && (
                        <p className="text-center text-muted-foreground">
                            No download history yet
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
