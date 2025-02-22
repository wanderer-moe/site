import {
    CategoryRoute,
    GameRoute,
    GamesRoute,
    DiscordMembersRoute,
    ContributorsRoute,
    ChangeLogRoute,
} from "../types";

export async function getGames(): Promise<{ response: GamesRoute }> {
    try {
        const response = await fetch("https://api.wanderer.moe/games", {
            next: {
                revalidate: 1800,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
}

export async function getGame(game: string): Promise<{ response: GameRoute }> {
    try {
        const response = await fetch(`https://api.wanderer.moe/game/${game}`, {
            next: {
                revalidate: 1800,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching game:", error);
        throw error;
    }
}

export async function getGameCategory(
    game: string,
    category: string,
): Promise<{ response: CategoryRoute }> {
    try {
        const response = await fetch(
            `https://api.wanderer.moe/game/${game}/${category}`,
            {
                next: {
                    revalidate: 1800,
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching game category:", error);
        throw error;
    }
}

export async function getContributors(): Promise<{
    response: ContributorsRoute;
}> {
    try {
        const response = await fetch(
            "https://api.wanderer.moe/discord/contributors",
            {
                next: {
                    revalidate: 1800,
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching contributors:", error);
        throw error;
    }
}

export async function getDiscordUsers(): Promise<{
    response: DiscordMembersRoute;
}> {
    try {
        const response = await fetch(
            "https://api.wanderer.moe/discord/members",
            {
                next: {
                    revalidate: 1800,
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching discord users:", error);
        throw error;
    }
}

export async function getChangeLog(): Promise<{
    response: ChangeLogRoute;
}> {
    try {
        const response = await fetch(
            "https://api.wanderer.moe/discord/changelog",
            {
                next: {
                    revalidate: 1800,
                },
            },
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { response: data };
    } catch (error) {
        console.error("Error fetching changelog:", error);
        throw error;
    }
}
