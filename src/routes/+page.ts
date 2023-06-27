import { error } from '@sveltejs/kit'
import type { AcceptableParams } from '@/lib/types/acceptableParams'

export async function load({ url }) {
    const searchParams = Object.fromEntries(url.searchParams.entries()) ?? {}
    const { query, game, asset } = searchParams as AcceptableParams

    try {
        const [gamesResponse, recentResponse, searchResults] =
            await Promise.all([
                fetch('https://v2-api-testing.wanderer.moe/games').then((res) =>
                    res.json()
                ),
                fetch('https://v2-api-testing.wanderer.moe/recent').then(
                    (res) => res.json()
                ),
                query || game || asset
                    ? fetch(
                          `https://v2-api-testing.wanderer.moe/search?${new URLSearchParams(
                              searchParams
                          ).toString()}`
                      )
                          .then((res) => res.json())
                          .then((searchData) => searchData.results)
                          .catch((err) => {
                              throw error(500, err)
                          })
                    : Promise.resolve([]),
            ])

        return {
            games: gamesResponse.results,
            recent: recentResponse.results,
            results: searchResults,
        }
    } catch (err) {
        throw error(500, err)
    }
}
