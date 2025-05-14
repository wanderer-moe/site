import { Metadata } from "next";
import { DownloadHistoryContent } from "./download-history-content";

export const metadata: Metadata = {
    title: "Download History - Wanderer.moe",
    description: "View your download history",
};

export default function DownloadHistoryPage() {
    return <DownloadHistoryContent />;
}
