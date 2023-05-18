import {
  error
} from "@sveltejs/kit";

export async function load({
  params
}) {
  const {
    game
  } = params;
  try {
    const res = await fetch(`https://api.wanderer.moe/game/${game}`);

    if (res.ok) {
      const response = await res.json();
      const subFolders = response.locations;
      return {
        game,
        subFolders,
      };
    }
  } catch (err) {
    throw error(404, "API Error or Page Not Found");
  }
}