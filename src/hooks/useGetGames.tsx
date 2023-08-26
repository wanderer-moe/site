import { Game } from '@/interfaces/params'
import { siteConfig } from '@/config/site'

// todo: fix
export function useGetGames() {
    return fetch(`${siteConfig.urls.api}/games/all`, {
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
