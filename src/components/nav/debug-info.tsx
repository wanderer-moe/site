"use client";

import { toast } from "sonner";

export function CopyDebugInfo() {
    function getDebugInfo() {
        return {
            note: "The following is for debugging purposes ONLY. DO NOT share this information with anyone you cannot trust.",
            navigator: {
                userAgent: navigator.userAgent,
            },
            locale: {
                language: navigator.language,
                languages: navigator.languages,
            },
            screen: {
                width: screen.width,
                height: screen.height,
                pixelDepth: screen.pixelDepth,
            },
            location: {
                href: location.href,
                origin: location.origin,
                pathname: location.pathname,
                search: location.search,
            },
            localStorage: {
                length: localStorage.length,
                keys: Object.keys(localStorage),
            },
        };
    }

    function copyToClipboard(text: string) {
        try {
            navigator.clipboard.writeText(text);
            toast.success(`Copied debug info to clipboard.`);
        } catch (error) {
            toast.error(`Failed to copy debug info to clipboard.`);
            console.error(error);
        }
    }

    return (
        <p
            onClick={() =>
                copyToClipboard(JSON.stringify(getDebugInfo(), null, 2))
            }
            className="text-primary transition-colors hover:text-muted-foreground cursor-pointer"
        >
            Copy Debug Info
        </p>
    );
}
