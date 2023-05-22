import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { game } = params;
  try {
    const res = await fetch(`https://api.wanderer.moe/oc-generator/${game}`);

    if (res.ok) {
      const response = await res.json();
      const jsonFile = response.json;
      return {
        game,
        jsonFile,
      };
    }
  } catch (err) {
    // console.log(err);
    throw error(404, "API Error or Page Not Found");
  }
}
