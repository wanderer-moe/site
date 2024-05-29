import { Metadata } from "next";
import { DescriptionImage } from "~/components/desc-image";
import { GamesGrid } from "~/components/games/games-grid";
import { InfoGrid } from "~/components/info/info-grid";

export const metadata: Metadata = {
    title: "home • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function Home() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <DescriptionImage
                    url="https://cdn.wanderer.moe/wuthering-waves/cover.png"
                    alt="wanderer.moe"
                    title="wanderer.moe"
                    description="Centralized game assets database"
                />
                <GamesGrid />
                <InfoGrid />
            </div>
        </main>
    );
}
