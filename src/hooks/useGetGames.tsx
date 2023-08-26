import { Game } from '@/interfaces/params'

export function useGetGames() {
    return fetch(`https://v2-api-testing.wanderer.moe/games/all`, {
        next: {
            revalidate: 5,
        },
    })
        .then((res) => res.json())
        .then((data) =>
            data.results.map((game: Game) => ({
                ...game,
                asset_categories: [...new Set(game.asset_categories)],
            })),
        )
}
