import { Metadata } from "next";
import { SavedAssetsContent } from "./saved-content";

export const metadata: Metadata = {
    title: "Saved Assets • wanderer.moe",
    description: "View and manage your saved assets on wanderer.moe",
};

export default function SavedAssetsPage() {
    return <SavedAssetsContent />;
}
