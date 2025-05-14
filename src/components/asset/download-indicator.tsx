"use client";

import { useAppDispatch, useAppSelector } from "~/redux/store";
import {
    setIsMassDownloading,
    clearSelectedAssets,
    toggleAssetSelection,
} from "~/redux/slice/asset-slice";
import { addToHistory } from "~/redux/slice/download-history-slice";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
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
    Download,
    Info,
} from "lucide-react";
import axios, { AxiosError } from "axios";
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
import Link from "next/link";
import { useLogger } from "next-axiom";
import ResetDownloadStatus from "../nav/reset-dl-status";

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

    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    useEffect(() => {
        if (!isMassDownloading && isUnsharedMassDownloading) {
            setIsUnsharedMassDownloading(false);
            dispatch(setIsMassDownloading(false));
        }
    }, [isMassDownloading]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="flex flex-row gap-2 items-cente"
                >
                    <Download size={16} /> {selectedAssets.length}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 ">
                {isUnsharedMassDownloading && <ShowMassDownloadProgress />}
                {isMassDownloading && !isUnsharedMassDownloading && (
                    <MassDownloadInProgress />
                )}
                {!isUnsharedMassDownloading &&
                    !isMassDownloading &&
                    !isIndicatorOpen && <ShowSelectedAssets />}
            </DropdownMenuContent>
        </DropdownMenu>
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
        <div className="p-4 w-96 ">
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <p className="font-semibold">
                        Download is in progress on another tab
                    </p>
                    <p className="text-muted-foreground">
                        Another tab is currently downloading assets.
                    </p>
                    <ResetDownloadStatus />
                </div>
            </div>
        </div>
    );
}

type DownloadProgress = "fetching" | "zipping" | "sending" | "error" | "done";

function ShowMassDownloadProgress() {
    const [fetchedAssets, setFetchedAssets] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [downloadProgress, setDownloadProgress] =
        useState<DownloadProgress>("fetching");

    const { setIsUnsharedMassDownloading } = useContext(
        AssetDownloadIndicatorContext,
    );

    const dispatch = useAppDispatch();

    const logger = useLogger();

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

    const fetchAsset = async (asset: Asset, zip: JSZip): Promise<void> => {
        console.log("[Mass Downloading] Fetching asset", asset.path);
        try {
            const [, , , game, category] = asset.path.split("/");

            const response = await axios.get(
                "https://bridge.wanderer.moe/?url=" + asset.path,
                {
                    responseType: "arraybuffer",
                    withCredentials: false,
                },
            );

            zip.file(`${game}/${category}/${asset.name}.png`, response.data);
            setFetchedAssets((prev) => prev + 1);
        } catch (error) {
            console.error(
                "[Mass Downloading] Failed to fetch asset",
                asset.path,
                error,
            );
            throw error;
        }
    };

    const downloadAndZipAssets = async () => {
        const logId = "massdl-" + Math.random().toString(36).substring(2);

        logger.debug("Initiating mass download process", {
            assetList: selectedAssets.map((asset) => asset.path),
            id: logId,
        });

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

            logger.debug("Sending ZIP file to client", {
                assetList: selectedAssets.map((asset) => asset.path),
                id: logId,
            });

            setDownloadProgress("sending");
            const url = URL.createObjectURL(zipFile);
            const a = document.createElement("a");
            a.href = url;
            a.download = `assets-${new Date().toISOString()}.zip`;
            a.click();

            await new Promise((resolve) => setTimeout(resolve, 1000));

            URL.revokeObjectURL(url);
            setDownloadProgress("done");
            toast.success(`Sent ${selectedAssets.length} assets to client`);

            dispatch(addToHistory({ assets: [...selectedAssets] }));

            logger.debug("Mass download process succeeded", {
                assetList: selectedAssets.map((asset) => asset.path),
                id: logId,
            });

            dispatch(clearSelectedAssets());
        } catch (error: AxiosError | Error | unknown) {
            console.error("Mass Downloading Error: " + error);

            let userErrorMessage = "Failed to download assets";
            let isCorsError = false;

            if (
                error instanceof AxiosError &&
                error.message === "Network Error"
            ) {
                userErrorMessage = "Failed to fetch assets, try again later";
                isCorsError = true;
            }

            toast.error(userErrorMessage);
            setDownloadProgress("error");

            logger.error("Failed to fetch or ZIP assets", {
                error,
                assetList: selectedAssets.map((asset) => asset.path),
                id: logId,
                isCorsError,
            });
        } finally {
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
        <div className="p-4 w-96 ">
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <p className="font-semibold">
                        Downloading {selectedAssets.length} assets
                    </p>
                    <p className="text-destructive mb-2">
                        Do not close this tab!
                    </p>
                    <div className="text-muted-foreground flex flex-col">
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
        </div>
    );
}

function ShowSelectedAssets() {
    const { isUnsharedMassDownloading, setIsUnsharedMassDownloading } =
        useContext(AssetDownloadIndicatorContext);

    const dispatch = useAppDispatch();

    const selectedAssets = useAppSelector(
        (state) => state.assets.selectedAssets,
    );

    // const gameCategoryAssetMap = new Map();

    // selectedAssets.forEach((asset) => {
    //     const [, , , game, category] = asset.path.split("/");

    //     const categoryMap = gameCategoryAssetMap.get(game) || new Map();
    //     gameCategoryAssetMap.set(game, categoryMap);

    //     const assets = categoryMap.get(category) || [];
    //     categoryMap.set(category, [...assets, asset]);
    // });

    const handleDownloadClick = () => {
        if (selectedAssets.length === 0 || isUnsharedMassDownloading) return;

        setIsUnsharedMassDownloading(true);
        dispatch(setIsMassDownloading(true));
    };

    return (
        <div className="p-4 w-96 ">
            <div className="flex items-center gap-4 w-full">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row justify-between items-center">
                        <p>{selectedAssets.length} assets selected</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"ghost"} size="icon">
                                    <Info size={16} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>
                                        Mass Download Information
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="flex flex-col gap-2">
                                    <p>
                                        The mass download feature is VERY
                                        EXPERIMENTAL and may undergo changes.
                                    </p>
                                    <p>
                                        Select assets by double tapping on them,
                                        you can deselect them by double tapping
                                        again or tapping on the asset image in
                                        the selected assets list.
                                    </p>
                                    <p>
                                        Selected assets are synced across
                                        browser tabs and not forgotten when you
                                        close the tab or navigate elsewhere.
                                    </p>
                                    <p>
                                        While there's no limit to the number of
                                        assets you can select, be aware that it
                                        might affect performance.
                                    </p>
                                    <p>
                                        The functionality of this feature may
                                        vary depending on the browser you use.
                                        For mobile users, we recommend using the
                                        default browser of your device.
                                    </p>
                                    <p>
                                        If you come across any issues, please
                                        report them in the{" "}
                                        <Link
                                            href="https://discord.wanderer.moe"
                                            target="_blank"
                                            className="text-primary hover:text-muted-foreground transition-all duration-150"
                                        >
                                            #site-discussion channel on Discord!
                                        </Link>
                                    </p>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                    {selectedAssets.length > 0 ? (
                        <ScrollArea className="h-48 w-full rounded-md my-2">
                            {selectedAssets.map((asset) => (
                                <div
                                    key={asset.name}
                                    className="flex flex-row items-center gap-2 p-2 rounded-md bg-muted-background"
                                >
                                    <div className="group hover:cursor-pointer relative">
                                        <img
                                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/${asset.path.split("/")[3]}/${asset.path.split("/")[4]}/${asset.name}.png`}
                                            alt={asset.name}
                                            className="rounded-md min-h-12 min-w-12 h-12 w-12 object-contain p-1"
                                        />
                                        <div
                                            className="rounded-md absolute inset-0 flex items-center transition duration-150 justify-center bg-opacity-0 group-hover:bg-opacity-75 bg-black"
                                            onClick={() =>
                                                dispatch(
                                                    toggleAssetSelection(asset),
                                                )
                                            }
                                        >
                                            <Trash className="h-6 w-6 text-white opacity-0 group-hover:opacity-100" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold overflow-ellipsis">
                                            {asset.name}
                                        </p>
                                        <p className="text-muted-foreground text-xs">
                                            {FormatGameName(
                                                asset.path.split("/")[3],
                                            )}{" "}
                                            {FormatCategoryName(
                                                asset.path.split("/")[4],
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    ) : (
                        <div className="w-full h-48 flex items-center justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <img
                                    src="https://cdn.wanderer.moe/cdn-cgi/image/width=192,height=192,quality=75/genshin-impact/emotes/paimon-s-paintings-set-33-12.png"
                                    alt="emote"
                                    className="w-12 h-12"
                                />
                                <div className="flex flex-col">
                                    <p className="">No assets selected</p>
                                    <p className="text-muted-foreground text-xs">
                                        Select multiple assets to mass download
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-row gap-2 items-center">
                        <Button
                            className="transition-all duration-150 w-full flex flex-row gap-2"
                            disabled={
                                isUnsharedMassDownloading ||
                                selectedAssets.length === 0
                            }
                            variant={"secondary"}
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
                                            onClick={() => {
                                                dispatch(clearSelectedAssets());
                                                toast.success(
                                                    `Cleared ${selectedAssets.length} assets`,
                                                );
                                            }}
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
        </div>
    );
}
