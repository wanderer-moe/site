export const filterGamesSearchBar = (allGames, query) => {
    if (!query || query.length < 1) {
        return []
    }

    const lowercaseQuery = query.toLowerCase()
    const keywords = lowercaseQuery.split(' ').filter((kw) => kw.length > 0)

    // create a new array of game/location objects
    const formattedGames = allGames.map((game) => {
        return {
            name: game.name.toLowerCase(),
            locations: game.subfolders.map((subfolders) =>
                subfolders.name.toLowerCase()
            ),
        }
    })

    const gamesWithLocations = formattedGames.flatMap((game) =>
        game.locations.map((location) => ({
            gameName: game.name.replace(/ /g, '-').toLowerCase(),
            locationName: location.toLowerCase(),
        }))
    )

    // filter the array based on the search query
    const filteredGames = gamesWithLocations.filter((game) => {
        const gameName = game.gameName
        const locationName = game.locationName
        return keywords.every(
            (kw) => gameName.includes(kw) || locationName.includes(kw)
        )
    })

    // console.log(filteredGames)
    // return filteredGames.slice(0, 5) if limiting the number of results
    return filteredGames
}
