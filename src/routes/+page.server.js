export const load = async () => {
  const games = await fetch("https://api.wanderer.moe/games");
  const gamesJson = await games.json();
  const ocGenerators = await fetch("https://api.wanderer.moe/oc-generators");
  const ocGeneratorsJson = await ocGenerators.json();
  try {
    const allGames = gamesJson.games;
    const allOCGenerators = ocGeneratorsJson;
    return {
      allGames,
      allOCGenerators,
    };
  } catch (err) {
    throw error(500, "Error fetching data from API");
  }
};
