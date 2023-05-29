// TODO: rewrite this function (incorrect expected behaviour)
export const filterGamesSearchBar = (allGames, query) => {
    if (!query || query.length < 1) {
        return [];
    }

    const lowercaseQuery = query.toLowerCase();
    const keywords = lowercaseQuery.split(" ").filter((kw) => kw.length > 0);

    const filteredGames = [];
    allGames.forEach((game) => {
        const gameName = game.name.toLowerCase();
        const subfolders = game.subfolders.map((subfolder) =>
            subfolder.name.toLowerCase()
        );
        keywords.forEach((kw) => {
            if (gameName.includes(kw)) {
                subfolders.forEach((subfolder) => {
                    filteredGames.push({
                        gameName: game.name,
                        subfolder: subfolder,
                    });
                });
            } else {
                subfolders.forEach((subfolder) => {
                    if (subfolder.includes(kw)) {
                        filteredGames.push({
                            gameName: game.name,
                            subfolder: subfolder,
                        });
                    }
                });
            }
        });
    });

    return filteredGames;
};
