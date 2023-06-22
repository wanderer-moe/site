import { getReleases } from '@/lib/utils/github'

export async function load({ fetch }) {
    try {
        const [gamesResponse, ocGeneratorsResponse, releases] =
            await Promise.all([
                fetch('https://api.wanderer.moe/games'),
                fetch('https://api.wanderer.moe/oc-generators'),
                getReleases(3),
            ])
        const games = await gamesResponse.json()
        const ocGenerators = await ocGeneratorsResponse.json()
        return {
            allGames: games.games,
            allOCGenerators: ocGenerators,
            releases,
        }
    } catch (err) {
        throw new Error(500, 'Error fetching data from API')
    }
}
