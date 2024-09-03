import {
    CategoryRoute,
    GameRoute,
    GamesRoute,
    DiscordMembersRoute,
    ContributorsRoute,
    ChangeLogRoute,
} from "../types";

export async function getGames(): Promise<{ response: GamesRoute }> {
    const response = await fetch("https://api.wanderer.moe/games", {
        next: {
            revalidate: 1800,
        },
    });
    const data = await response.json();
    return { response: data };
}

export async function getGame(game: string): Promise<{ response: GameRoute }> {
    const response = await fetch(`https://api.wanderer.moe/game/${game}`, {
        next: {
            revalidate: 1800,
        },
    });
    const data = await response.json();
    return { response: data };
}

export async function getGameCategory(
    game: string,
    category: string,
): Promise<{ response: CategoryRoute }> {
    const response = await fetch(
        `https://api.wanderer.moe/game/${game}/${category}`,
        {
            next: {
                revalidate: 1800,
            },
        },
    );
    const data = await response.json();
    return { response: data };
}

export async function getContributors(): Promise<{
    response: ContributorsRoute;
}> {
    const response = await fetch(
        "https://api.wanderer.moe/discord/contributors",
        {
            next: {
                revalidate: 1800,
            },
        },
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

export async function getChangeLog(): Promise<{
    response: ChangeLogRoute;
}> {
    const response = await fetch("https://api.wanderer.moe/discord/changelog", {
        next: {
            revalidate: 1800,
        },
    });
    const data = await response.json();
    return { response: data };
}
