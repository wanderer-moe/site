import { getReleases } from '@/lib/utils/github.js'

export async function load({ fetch }) {
    try {
        const [gamesResponse, ocGeneratorsResponse, releases] =
            await Promise.all([
                fetch('https://api.wanderer.moe/games'),
                fetch('https://api.wanderer.moe/oc-generators'),
                getReleases(3),
            ])
        const games = await gamesResponse.json()
        const allOCGenerators = await ocGeneratorsResponse.json()
        const allGames = games.games.sort((a, b) => new Date(b.lastUploaded) - new Date(a.lastUploaded));
        return {
            allGames,
            allOCGenerators,
            releases,
        }
    } catch (err) {
        throw new Error(500, 'Error fetching data from API')
    }
}
