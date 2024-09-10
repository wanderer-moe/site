"use client";
import {
    ArrowRightIcon,
    CircleDollarSignIcon,
    ClipboardIcon,
    GithubIcon,
    LinkIcon,
    TwitterIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";

type PresetPrices = {
    amount: number;
};

const presetPrices: PresetPrices[] = [
    { amount: 3.0 },
    { amount: 5.0 },
    { amount: 10.0 },
    { amount: 15.0 },
    { amount: 20.0 },
];

export function SupportGrid() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-2/3">
                <Prices />
            </div>
            <div className="w-full sm:w-1/3">
                <SocialsGrid />
            </div>
        </div>
    );
}

function Prices() {
    const [selectedPrice, setSelectedPrice] = useState(presetPrices[0]);
    const [link, setLink] = useState("");

    function handlePriceClick(price: PresetPrices) {
        setSelectedPrice(price);

        const url = new URL(`https://buy.stripe.com/4gw6qP1FCbYl3v24gh`);
        url.searchParams.set(
            "__prefilled_amount",
            (price.amount * 100).toString(),
        );
        setLink(url.toString());
    }

    return (
        <Card className="group flex flex-col gap-1 p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
            <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                    <CircleDollarSignIcon size={16} />
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        Donate (one-time)
                    </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                    Donate $5 or more to recieve a role in our discord & your
                    name on /contributors.
                </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2">
                    {presetPrices.map((price, index) => (
                        <Button
                            variant="secondary"
                            className="w-1/2"
                            key={index}
                            onClick={() => handlePriceClick(price)}
                        >
                            ${price.amount}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-row gap-2">
                    <Input
                        type="number"
                        min={5}
                        max={1000}
                        placeholder="Custom amount"
                        value={selectedPrice.amount}
                        onChange={(e) =>
                            setSelectedPrice({
                                ...selectedPrice,
                                amount: Number(e.target.value),
                            })
                        }
                    />
                    <Button
                        variant="secondary"
                        className="w-1/2"
                        onClick={() => {
                            window.open(link, "_blank");
                        }}
                    >
                        <ArrowRightIcon size={16} />
                    </Button>
                </div>
            </div>
        </Card>
    );
}

function SocialsGrid() {
    return (
        <Card className="group flex flex-col gap-1 p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
            <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                    <LinkIcon size={16} />
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        Share the project
                    </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                    Help us reach more people!
                </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row gap-2">
                    <Button
                        variant="secondary"
                        className="w-1/2"
                        onClick={() => {
                            window.open(
                                "https://twitter.com/wanderermoe",
                                "_blank",
                            );
                        }}
                    >
                        <TwitterIcon size={16} />
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-1/2"
                        onClick={() => {
                            window.open("https://discord.gg/assets", "_blank");
                        }}
                    >
                        <DiscordLogoIcon className="size-5" />
                    </Button>
                </div>
                <div className="flex flex-row gap-2">
                    <Button
                        variant="secondary"
                        className="w-1/2"
                        onClick={() => {
                            try {
                                navigator.clipboard.writeText(
                                    "https://wanderer.moe/",
                                );
                                toast.success("Copied to clipboard!");
                            } catch (error) {
                                toast.error("Failed to copy to clipboard.");
                            }
                        }}
                    >
                        <ClipboardIcon size={16} />
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-1/2"
                        onClick={() => {
                            window.open(
                                "https://github.com/wanderer-moe",
                                "_blank",
                            );
                        }}
                    >
                        <GithubIcon size={16} />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
