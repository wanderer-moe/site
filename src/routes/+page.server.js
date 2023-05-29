export const load = async () => {
    try {
        const gamesResponse = await fetch('https://api.wanderer.moe/games')
        const games = await gamesResponse.json()
        const ocGeneratorsResponse = await fetch(
            'https://api.wanderer.moe/oc-generators'
        )
        const ocGenerators = await ocGeneratorsResponse.json()
        return {
            allGames: games.games,
            allOCGenerators: ocGenerators,
        }
    } catch (err) {
        throw new Error('Error fetching data from API')
    }
}
