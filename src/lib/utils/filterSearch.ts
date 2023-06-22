// import type { Game, Subfolder, FormattedGame, FilteredGame } from '@/types/searchBar'

// export const filterGamesSearchBar = (
//     allGames: Game[],
//     query: string
// ): FilteredGame[] => {
//     if (!query || query.length < 1) {
//         return []
//     }

//     const lowercaseQuery = query.toLowerCase()
//     const keywords = lowercaseQuery.split(' ').filter((kw) => kw.length > 0)

//     // create a new array of game/location objects
//     const formattedGames: FormattedGame[] = allGames.map((game: Game) => {
//         return {
//             name: game.name.toLowerCase(),
//             locations: game.subfolders.map((subfolder: Subfolder) =>
//                 subfolder.name.toLowerCase()
//             ),
//         }
//     })

//     const gamesWithLocations: FilteredGame[] = formattedGames.reduce(
//         (accumulator: FilteredGame[], game: FormattedGame) => {
//             const locationsWithNames: FilteredGame[] = game.locations.map(
//                 (location: string) => ({
//                     gameName: game.name.replace(/ /g, '-').toLowerCase(),
//                     locationName: location.toLowerCase(),
//                 })
//             )
//             return accumulator.concat(locationsWithNames)
//         },
//         []
//     )

//     // filter the array based on the search query
//     const filteredGames: FilteredGame[] = gamesWithLocations.filter(
//         (game: FilteredGame) => {
//             const gameName = game.gameName
//             const locationName = game.locationName
//             return keywords.every(
//                 (kw) => gameName.includes(kw) || locationName.includes(kw)
//             )
//         }
//     )

//     // console.log(filteredGames)
//     // return filteredGames.slice(0, 5) if limiting the number of results
//     return filteredGames
// }
