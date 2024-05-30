import { Metadata } from "next";
import { DescriptionImage } from "~/components/desc-image";
import { GamesGrid } from "~/components/games/games-grid";
import { InfoGrid } from "~/components/info/info-grid";
import { GamesRoute } from "~/lib/types";

export const metadata: Metadata = {
    title: "home • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

async function fetchGameData(): Promise<GamesRoute> {
    const res = await fetch("https://api.wanderer.moe/games");
    return res.json();
}

export default async function Home() {
    const games = await fetchGameData().then((data) => {
        data.games.sort((a, b) => {
            return (
                new Date(b.lastUploaded).getTime() -
                new Date(a.lastUploaded).getTime()
            );
        });
        return data;
    });

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="wanderer.moe"
                    title="wanderer.moe"
                    description="Centralized game assets database"
                />
                <GamesGrid games={games.games} />
                <InfoGrid />
            </div>
        </main>
    );
}
