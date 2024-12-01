import { Metadata } from "next";
import { DescriptionImage } from "~/components/desc-image";
import { GamesGrid } from "~/components/games/games-grid";
import { InfoGrid } from "~/components/info/info-grid";
import { HomeChangelogHandler } from "~/components/changelog/changelog-handler";
import { OriginoidPromoDialog } from "~/components/ui/originoid-promo-dialog";

export const metadata: Metadata = {
    title: "Home • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default async function Home() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <OriginoidPromoDialog />
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="wanderer.moe"
                    title="wanderer.moe"
                    description="Centralized game assets database"
                />
                <GamesGrid />
                <HomeChangelogHandler />
                <InfoGrid />
            </div>
        </main>
    );
}
