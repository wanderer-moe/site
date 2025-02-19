"use client";

import * as React from "react";
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./dialog";
import { useEffect, useState } from "react";

export function OriginoidPromoDialog() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const shouldShow =
            localStorage.getItem("showOriginoidPromo") !== "false";

        if (shouldShow) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        OC Creator or Artist?
                    </DialogTitle>
                    <DialogDescription className="pt-4 space-y-4">
                        <p>
                            Pre-register for <strong>originoid.co</strong> - a
                            free platform designed exclusively for creators to
                            share original characters, artwork, edits, and more,
                            with cutting-edge copy protection, customization &
                            linking features.
                        </p>
                        <p>
                            We're offering{" "}
                            <span className="text-foreground font-semibold">
                                50% off on all yearly plans
                            </span>{" "}
                            before our official release. This one-time
                            opportunity directly supports continued development
                            & asset updates for wanderer.moe.
                        </p>
                        <div className="flex justify-center pt-2 w-full gap-2">
                            <Button
                                onClick={() => {
                                    localStorage.setItem(
                                        "showOriginoidPromo",
                                        "false",
                                    );
                                    setIsOpen(false);
                                }}
                                variant="secondary"
                                className="w-full"
                            >
                                Don't Show Again
                            </Button>
                            <Button
                                onClick={() => {
                                    window.open(
                                        "https://originoid.co",
                                        "_blank",
                                    );
                                    setIsOpen(false);
                                }}
                                className="w-full"
                            >
                                Pre-register Now
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
