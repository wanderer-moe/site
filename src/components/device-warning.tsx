"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { useBrowserDetection } from "~/hooks/use-browser-detection";
import { setCookie, getCookie } from "cookies-next";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "~/components/ui/alert-dialog";

export const recommendedBrowsers: { [key: string]: string[] } = {
    android: ["chrome", "google"],
    ios: ["safari", "chrome"],
};

const osMap: { [key: string]: string } = {
    android: "Android",
    ios: "iOS",
};

export function DeviceWarning() {
    const [isOpen, setIsOpen] = React.useState<boolean>(true);
    const { browser, os } = useBrowserDetection();

    const handleDontShowAgain = React.useCallback(() => {
        setCookie("hasSeenWarning", "true");
        setIsOpen(false);
    }, []);

    const hasSeenWarning = getCookie("hasSeenWarning") === "true";
    const isOnMobile = os === "android" || os === "ios";

    if (hasSeenWarning || !isOnMobile || !browser || !os) {
        return null;
    }

    const recommendedBrowsersList = recommendedBrowsers[os]
        .map((browser) => browser.charAt(0).toUpperCase() + browser.slice(1))
        .join(" or ");

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Device Warning</AlertDialogTitle>
                    <AlertDialogDescription>
                        You&apos;re on {osMap[os]}. It&apos;s recommended to use{" "}
                        {recommendedBrowsersList} to avoid any issues when
                        downloading files.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2">
                    <Button variant={"outline"} onClick={handleDontShowAgain}>
                        Don&apos;t Show Again
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>Close</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
