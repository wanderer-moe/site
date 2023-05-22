import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { game, asset } = params;
  try {
    const res = await fetch(`https://api.wanderer.moe/game/${game}/${asset}`);

    if (res.ok) {
      const response = await res.json();
      const images = response.images;
      return {
        response,
        game,
        asset,
        images,
      };
    }
  } catch (err) {
    throw error(404, "API Error or Page Not Found");
  }
}
