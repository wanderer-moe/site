import { error } from '@sveltejs/kit'
import type { AcceptableParams } from '@/lib/types/acceptableParams'

export async function load({ url, fetch }) {
    const searchParams = Object.fromEntries(url.searchParams.entries()) ?? {}
    const { query, game, asset } = searchParams as AcceptableParams

    try {
        const [gamesResponse, recentResponse] = await Promise.all([
            fetch('https://v2-api-testing.wanderer.moe/games').then((res) =>
                res.json()
            ),
            fetch('https://v2-api-testing.wanderer.moe/recent').then((res) =>
                res.json()
            ),
        ])

        return {
            games: gamesResponse.results,
            recent: recentResponse.results,
        }
    } catch (err) {
        throw error(500, err)
    }
}
