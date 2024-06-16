"use client";

import { useAppDispatch, useAppSelector } from "~/redux/store";
import {
    setIsMassDownloading,
    clearSelectedAssets,
    toggleAssetSelection,
} from "~/redux/slice/asset-slice";
import { Card } from "~/components/ui/card";
import { FormatGameName, FormatCategoryName } from "~/lib/format";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Asset } from "~/lib/types";
import { useEffect, useRef, useState, createContext, useContext } from "react";
import {
    CircleCheck,
    LoaderCircle,
    CircleMinus,
    DownloadIcon,
    Trash,
    ChevronUp,
    ChevronDown,
} from "lucide-react";
import axios from "axios";
import JSZip from "jszip";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

// redux state is shared across multiple tabs - invoking it will initiate multiple downloads across tabs
// instead, establish context api state to manage this scenario and prevent multiple downloads occurring
export const AssetDownloadIndicatorContext = createContext<{
    isUnsharedMassDownloading: boolean;
    setIsUnsharedMassDownloading: (isUnsharedMassDownloading: boolean) => void;
    isIndicatorOpen: boolean;
    setIsIndicatorOpen: (isIndicatorOpen: boolean) => void;
}>({
    isUnsharedMassDownloading: false,
    setIsUnsharedMassDownloading: () => {},
    isIndicatorOpen: false,
    setIsIndicatorOpen: () => {},
});

function AssetDownloadIndicatorProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isUnsharedMassDownloading, setIsUnsharedMassDownloading] =
        useState<boolean>(false);

    const [isIndicatorOpen, setIsIndicatorOpen] = useState<boolean>(false);

    return (
        <AssetDownloadIndicatorContext.Provider
            value={{
                isUnsharedMassDownloading,
                setIsUnsharedMassDownloading,
                isIndicatorOpen,
                setIsIndicatorOpen,
            }}
        >
            {children}
        </AssetDownloadIndicatorContext.Provider>
    );
}

export function AssetDownloadIndicator() {
    return (
        <AssetDownloadIndicatorProvider>
            <AssetDownloadIndicatorContent />
        </AssetDownloadIndicatorProvider>
    );
}

function AssetDownloadIndicatorContent() {
    const {
        isUnsharedMassDownloading,
        setIsUnsharedMassDownloading,
        isIndicatorOpen,
    } = useContext(AssetDownloadIndicatorContext);

    const isMassDownloading = useAppSelector(
        (state) => state.assets.isMassDownloading,
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isMassDownloading && isUnsharedMassDownloading) {
            setIsUnsharedMassDownloading(false);
            dispatch(setIsMassDownloading(false));
        }
    }, [isMassDownloading]);

    if (!isIndicatorOpen) {
        return <ToggleAssetDownloadIndicator />;
    }

    if (isUnsharedMassDownloading) {
        return <ShowMassDownloadProgress />;
    }

    if (isMassDownloading) {
        return <MassDownloadInProgress />;
    }

    return <ShowSelectedAssets />;
}

function ToggleAssetDownloadIndicator() {
    const { setIsIndicatorOpen } = useContext(AssetDownloadIndicatorContext);

    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    return (
        <Card className="z-50 fixed bottom-4 left-4 p-4 w-96">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between w-full items-center gap-2">
                        <p>{selectedAssets.length} assets selected</p>
                        <ChevronUp
                            size={24}
                            onClick={() => setIsIndicatorOpen(true)}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
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
    return (
        <Card className="z-50 fixed bottom-4 left-4 p-4 w-96">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        Download is in progress on another tab
                    </p>
                    <p className="text-muted-foreground">
                        Another tab is currently downloading assets.
                    </p>
                </div>
            </div>
        </Card>
    );
}

type DownloadProgress = "fetching" | "zipping" | "sending" | "error" | "done";

function ShowMassDownloadProgress() {
    const [fetchedAssets, setFetchedAssets] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [downloadProgress, setDownloadProgress] =
        useState<DownloadProgress>("fetching");

    const { isUnsharedMassDownloading, setIsUnsharedMassDownloading } =
        useContext(AssetDownloadIndicatorContext);

    const dispatch = useAppDispatch();
    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    const isMassDownloading = useAppSelector(
        (state) => state.assets.isMassDownloading,
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

    const validateAssetPath = (path: string): boolean => {
        return /^https:\/\/cdn\.wanderer\.moe\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+\.png$/i.test(
            path,
        );
    };

    const fetchAsset = async (asset: Asset, zip: JSZip): Promise<void> => {
        const [, , , game, category] = asset.path.split("/");

        if (!validateAssetPath(asset.path)) {
            console.error("Invalid asset path:", asset.path);
            return;
        }

        const response = await axios.get(asset.path, {
            responseType: "arraybuffer",
        });

        zip.file(`${game}/${category}/${asset.name}.png`, response.data);
        setFetchedAssets((prev) => prev + 1);
    };

    const downloadAndZipAssets = async () => {
        const zip = new JSZip();
        setTotalAssets(selectedAssets.length);
        setFetchedAssets(0);

        try {
            setDownloadProgress("fetching");
            let assetIndex = 0;

            while (isMassDownloading && assetIndex < selectedAssets.length) {
                await fetchAsset(selectedAssets[assetIndex], zip);
                assetIndex++;
            }

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
            toast.success(
                `${selectedAssets.length} assets downloaded successfully`,
            );
        } catch (error) {
            console.error("Failed to fetch or ZIP:", error);
            setDownloadProgress("error");
            toast.error("Failed to fetch or ZIP assets");
        } finally {
            dispatch(clearSelectedAssets());
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
        <Card className="z-50 fixed bottom-4 left-4 p-4 w-96">
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        Downloading {selectedAssets.length} assets
                    </p>
                    <p className="text-destructive-foreground">
                        Do not close this tab!
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

function ShowSelectedAssets() {
    const {
        isUnsharedMassDownloading,
        setIsUnsharedMassDownloading,
        setIsIndicatorOpen,
    } = useContext(AssetDownloadIndicatorContext);
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
        if (selectedAssets.length === 0 || isUnsharedMassDownloading) return;

        setIsUnsharedMassDownloading(true);
        dispatch(setIsMassDownloading(true));
    };

    return (
        <Card className="z-50 fixed bottom-4 left-4 p-4 w-96">
            <div className="flex items-center gap-4 w-full">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center gap-2">
                        <p>{selectedAssets.length} assets selected</p>
                        <ChevronDown
                            size={24}
                            onClick={() => setIsIndicatorOpen(false)}
                        />
                    </div>
                    <ScrollArea className="h-64 w-full rounded-md">
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
                                                    <div className="flex flex-col gap-1">
                                                        {assets.map((asset) => (
                                                            <div
                                                                key={asset.path}
                                                                onClick={() =>
                                                                    dispatch(
                                                                        toggleAssetSelection(
                                                                            asset,
                                                                        ),
                                                                    )
                                                                }
                                                                className="flex items-center text-sm text-muted-foreground space-x-2 hover:text-destructive group hover:cursor-pointer transition duration-150"
                                                            >
                                                                <Trash
                                                                    size={16}
                                                                />
                                                                <p>
                                                                    {asset.name}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ),
                            )}
                        </div>
                    </ScrollArea>
                    <div className="flex flex-row gap-2 items-center">
                        <Button
                            className="transition-all duration-150 w-full flex flex-row gap-2"
                            disabled={
                                isUnsharedMassDownloading ||
                                selectedAssets.length === 0
                            }
                            onClick={() => handleDownloadClick()}
                        >
                            <DownloadIcon size={16} /> Download Assets
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    className="transition-all duration-150 flex flex-row gap-2"
                                    disabled={
                                        isUnsharedMassDownloading ||
                                        selectedAssets.length === 0
                                    }
                                    variant={"destructive"}
                                    size={"icon"}
                                    // onClick={() => dispatch(clearSelectedAssets())}
                                >
                                    <Trash size={16} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Clear Selected Assets
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription>
                                    Are you sure you want to clear all selected
                                    assets?
                                </DialogDescription>
                                <DialogFooter className="flex gap-2">
                                    <DialogClose asChild>
                                        <Button variant={"secondary"}>
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button
                                            onClick={() =>
                                                dispatch(clearSelectedAssets())
                                            }
                                            variant={"destructive"}
                                        >
                                            Clear
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </Card>
    );
}
