import { MetadataRoute } from "next";
import { GamesRoute } from "~/lib/types";

const defaults: {
    changeFrequency?:
        | "weekly"
        | "always"
        | "hourly"
        | "daily"
        | "monthly"
        | "yearly"
        | "never";
    lastModified?: Date;
} = {
    changeFrequency: "daily",
    lastModified: new Date(),
};

// the average priority is 0.5
// so we can set 0.8 for [game] and [game] / [category] as they're just as important

const baseUrl = "https://wanderer.moe";

async function getGames() {
    const res = await fetch(`https://api.wanderer.moe/games`)
        .then((res) => res.json())
        .then((data: GamesRoute) => data);

    return res;
}

const games = await getGames();

export default function sitemap(): MetadataRoute.Sitemap {
    // we create routes for each unique game
    // e.g /genshin-impact/
    // then the subfolders.name retrospectively, i.e /genshin-impact/character-sheets/

    const gameRoutes = games.games.flatMap((game) => {
        const gameRoute = {
            ...defaults,
            url: `${baseUrl}/${game.name}`,
            priority: 0.8,
        };

        const subfolderRoutes = game.subfolders.map((subfolder) => {
            return {
                ...defaults,
                url: `${baseUrl}/${game.name}/${subfolder.name}`,
                priority: 0.8,
            };
        });

        return [gameRoute, ...subfolderRoutes];
    });

    return [
        {
            ...defaults,
            url: baseUrl,
            priority: 1,
        },
        {
            ...defaults,
            url: `${baseUrl}/privacy-policy`,
            priority: 0.5,
        },
        ...gameRoutes,
    ];
}
