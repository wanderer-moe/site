import {
    CategoryRoute,
    GameRoute,
    GamesRoute,
    DiscordMembersRoute,
} from "../types";

export async function getGames(): Promise<{ response: GamesRoute }> {
    const response = await fetch("https://api.wanderer.moe/games");
    const data = await response.json();
    return { response: data };
}

export async function getGame(game: string): Promise<{ response: GameRoute }> {
    const response = await fetch(`https://api.wanderer.moe/game/${game}`);
    const data = await response.json();
    return { response: data };
}

export async function getGameCategory(
    game: string,
    category: string,
): Promise<{ response: CategoryRoute }> {
    const response = await fetch(
        `https://api.wanderer.moe/game/${game}/${category}`,
    );
    const data = await response.json();
    return { response: data };
}

export async function getDiscordUsers(): Promise<{
    response: DiscordMembersRoute;
}> {
    const response = await fetch("https://api.wanderer.moe/discord/members", {
        next: {
            revalidate: 1800,
        },
    });
    const data = await response.json();
    return { response: data };
}
