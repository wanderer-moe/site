export const load = async ({ fetch }) => {
  const response = await fetch(`/api/splashart`);
  const splashArt = await response.json();

  // return the character parts
  return {
    splashArt,
  };
};
