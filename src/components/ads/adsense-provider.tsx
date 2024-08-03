import Script from "next/script";

interface AdsenseProviderProps {
    pId: string;
}

export function AdsenseProvider({ pId }: AdsenseProviderProps) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}
