"use client";

import { useAppDispatch, useAppSelector } from "~/redux/store";
import {
    toggleAssetSelection,
    isAssetSelected,
    setIsMassDownloading,
    clearSelectedAssets,
} from "~/redux/slice/asset-slice";
import { Card } from "~/components/ui/card";
import { FormatGameName, FormatCategoryName } from "~/lib/format";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Asset } from "~/lib/types";
import { useEffect, useRef, useState } from "react";
import {
    CircleCheck,
    LoaderCircle,
    CircleMinus,
    DownloadIcon,
} from "lucide-react";
import axios from "axios";
import JSZip from "jszip";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

export function AssetDownloadIndicator() {
    const [isUnsharedMassDownloading, setIsUnsharedMassDownloading] =
        useState(false);

    const isMassDownloading = useAppSelector(
        (state) => state.assets.isMassDownloading,
    );

    // not calling `state.assets.isMassDownloading` here.
    // cuz state context is shared across multiple tabs, calling it will inadvertently trigger multiple downloads across these tabs (which is bad)
    // if the state.assets.isMassDownloading is true and isUnsharedMassDownloading is false, we'll tell the user the download is in progress on another tab (or they can cancel it and start a new one)

    switch (isUnsharedMassDownloading) {
        case false:
            if (isMassDownloading) {
                return <MassDownloadInProgress />;
            }

            return (
                <ShowSelectedAssets
                    setIsUnsharedMassDownloading={setIsUnsharedMassDownloading}
                    isUnsharedMassDownloading={isUnsharedMassDownloading}
                />
            );
        case true:
            return (
                <ShowMassDownloadProgress
                    setIsUnsharedMassDownloading={setIsUnsharedMassDownloading}
                    isUnsharedMassDownloading={isUnsharedMassDownloading}
                />
            );
    }
}

function AnimatedSpinner() {
    return (
        <LoaderCircle
            size={16}
            className="animate-spin transition-all ease-linear"
        />
    );
}

function MassDownloadInProgress() {
    const dispatch = useAppDispatch();

    return (
        <Card className="z-50 fixed bottom-0 left-0 m-4 p-4">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        Download is in progress on another tab
                    </p>
                    <p className="text-muted-foreground">
                        Another tab is currently downloading assets.
                    </p>
                    <Button
                        className="transition-all duration-150 flex flex-row gap-2"
                        onClick={() => {
                            dispatch(setIsMassDownloading(false));
                        }}
                    >
                        Cancel Download
                    </Button>
                </div>
            </div>
        </Card>
    );
}

interface ShowMassDownloadProgressProps {
    setIsUnsharedMassDownloading: (isUnsharedMassDownloading: boolean) => void;
    isUnsharedMassDownloading: boolean;
}

type DownloadProgress = "fetching" | "zipping" | "sending" | "error" | "done";

function ShowMassDownloadProgress({
    setIsUnsharedMassDownloading,
    isUnsharedMassDownloading,
}: ShowMassDownloadProgressProps) {
    const [fetchedAssets, setFetchedAssets] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [downloadProgress, setDownloadProgress] =
        useState<DownloadProgress>("fetching");

    const dispatch = useAppDispatch();
    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    const statusOrder = ["fetching", "zipping", "sending", "done", "error"];

    const getIcon = (status: "fetching" | "zipping" | "sending") => {
        const currentStatusIndex = statusOrder.indexOf(downloadProgress);
        const statusIndex = statusOrder.indexOf(status);

        if (statusIndex === currentStatusIndex) {
            return <AnimatedSpinner />;
        }

        if (statusIndex < currentStatusIndex) {
            return <CircleCheck size={16} />;
        }

        return <CircleMinus size={16} />;
    };

    const downloadAndZipAssets = async () => {
        const zip = new JSZip();
        setTotalAssets(selectedAssets.length);
        setFetchedAssets(0);

        setDownloadProgress("fetching");
        for (const asset of selectedAssets) {
            const [, , , game, category] = asset.path.split("/");

            try {
                const response = await axios.get(asset.path, {
                    responseType: "arraybuffer",
                });
                zip.file(
                    `${game}/${category}/${asset.name}.png`,
                    response.data,
                );
                setFetchedAssets((prev) => prev + 1);
            } catch (error) {
                console.error(`Failed to fetch: ${asset.path}:`, error);
                setDownloadProgress("error");
                return;
            }
        }

        try {
            setDownloadProgress("zipping");
            const zipFile = await zip.generateAsync({ type: "blob" });
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setDownloadProgress("sending");

            const url = URL.createObjectURL(zipFile);
            const a = document.createElement("a");
            a.href = url;
            a.download = `assets-${new Date().toISOString()}.zip`;
            a.click();
            await new Promise((resolve) => setTimeout(resolve, 1000));

            URL.revokeObjectURL(url);

            setDownloadProgress("done");
            dispatch(clearSelectedAssets());
            dispatch(setIsMassDownloading(false));
            setIsUnsharedMassDownloading(false);

            toast.success(
                `${selectedAssets.length} assets downloaded successfully`,
            );
        } catch (error) {
            console.error("Failed to ZIP:", error);

            setDownloadProgress("error");
            toast.error("Failed to ZIP assets");

            dispatch(setIsMassDownloading(false));
            setIsUnsharedMassDownloading(false);
        }
    };

    const downloadStartedRef = useRef(false);

    useEffect(() => {
        if (selectedAssets.length > 0 && !downloadStartedRef.current) {
            downloadStartedRef.current = true;
            downloadAndZipAssets();
        }
    }, [selectedAssets]);

    return (
        <Card className="z-50 fixed bottom-0 left-0 m-4 p-4">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        Downloading {selectedAssets.length} assets
                    </p>
                    <div className="text-muted-foreground">
                        <div className="flex flex-row gap-2 items-center">
                            {getIcon("fetching")} Fetching {fetchedAssets} of{" "}
                            {totalAssets} assets
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            {getIcon("zipping")} Zipping assets
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            {getIcon("sending")} Sending to client
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

interface ShowSelectedAssetsProps {
    setIsUnsharedMassDownloading: (isUnsharedMassDownloading: boolean) => void;
    isUnsharedMassDownloading: boolean;
}

function ShowSelectedAssets({
    setIsUnsharedMassDownloading,
    isUnsharedMassDownloading,
}: ShowSelectedAssetsProps) {
    const dispatch = useAppDispatch();

    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    const gameCategoryAssetMap = new Map();

    selectedAssets.forEach((asset) => {
        const [, , , game, category] = asset.path.split("/");

        const categoryMap = gameCategoryAssetMap.get(game) || new Map();
        gameCategoryAssetMap.set(game, categoryMap);

        const assets = categoryMap.get(category) || [];
        categoryMap.set(category, [...assets, asset]);
    });

    const handleDownloadClick = () => {
        if (selectedAssets.length === 0) return;
        if (isUnsharedMassDownloading) return;

        setIsUnsharedMassDownloading(true);
        dispatch(setIsMassDownloading(true));
    };

    return (
        <Card className="z-50 fixed bottom-0 left-0 m-4 p-4">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p>{selectedAssets.length} assets selected</p>
                    <div className="w-full border-b"></div>
                    <ScrollArea className="h-64 w-96 rounded-md">
                        <div className="flex flex-col gap-2">
                            {[...gameCategoryAssetMap.entries()].map(
                                ([game, categoryMap]) => (
                                    <div key={game}>
                                        <h2 className="font-semibold">
                                            {FormatGameName(game)}
                                        </h2>
                                        {[...categoryMap.entries()].map(
                                            ([category, assets]: [
                                                string,
                                                Asset[],
                                            ]) => (
                                                <div key={category}>
                                                    <h3>
                                                        {FormatCategoryName(
                                                            category,
                                                        )}
                                                    </h3>
                                                    {assets.map((asset) => (
                                                        <div
                                                            key={asset.path}
                                                            className="flex items-justify-between text-sm space-x-2"
                                                        >
                                                            <p className="text-sm text-muted-foreground">
                                                                {asset.name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    </ScrollArea>
                    <Button
                        className="transition-all duration-150 flex flex-row gap-2"
                        disabled={
                            isUnsharedMassDownloading ||
                            selectedAssets.length === 0
                        }
                        onClick={() => handleDownloadClick()}
                    >
                        <DownloadIcon size={16} /> Download Assets
                    </Button>
                </div>
            </div>
        </Card>
    );
}
