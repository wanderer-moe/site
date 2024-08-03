"use client";

import React, { useEffect } from "react";

interface AdBannerProps {
    dataAdSlot: string;
    dataAdFormat: string;
    dataFullWidthResponsive: boolean;
    pId: string;
}

export function AdBanner({
    dataAdSlot,
    dataAdFormat,
    dataFullWidthResponsive,
    pId,
}: AdBannerProps) {
    useEffect(() => {
        const initializeAds = () => {
            if (typeof window !== "undefined" && (window as any).adsbygoogle) {
                try {
                    ((window as any).adsbygoogle =
                        (window as any).adsbygoogle || []).push({});
                } catch (error: any) {
                    console.log(error.message);
                }
            }
        };

        initializeAds();
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={`ca-${pId}`}
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive.toString()}
        ></ins>
    );
}
