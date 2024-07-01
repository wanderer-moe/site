"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog";
import * as React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function NoticeDialog() {
    const [open, setOpen] = React.useState(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-2">
                        Support wanderer.moe
                    </DialogTitle>
                    <DialogDescription className="flex flex-col gap-2 text-left">
                        <p>
                            You're one of hundreds of thousands of users who
                            visit wanderer.moe monthly.
                        </p>
                        <p>
                            I, dromzeh, the creator of the site, have been
                            covering server costs out-of-pocket since I was 15
                            for the past 2+ years. This has amounted to
                            thousands of dollars and caused me significant
                            stress. Unfortunately, I can no longer sustain
                            wanderer.moe full-time without financial support.
                        </p>
                        <p>
                            As much as I hate asking for financial support, I
                            have no other options and cannot guarantee the
                            stability and future of the site without it.
                        </p>
                        <p>
                            If you find wanderer.moe useful, please consider
                            donating. Your donations will directly fund new
                            infrastructure, new site development, and cover
                            hosting costs.
                        </p>
                        <p>
                            {" "}
                            <span className="text-primary">
                                This message will continue to appear, however
                                you may still use the site. The site won't be
                                updated until the necessary funds are raised.
                            </span>
                        </p>
                        <Link
                            href="https://buy.stripe.com/00g16v1FC7I51mUaEE"
                            prefetch={false}
                        >
                            <Button className="w-full mt-2">Donate</Button>
                        </Link>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
