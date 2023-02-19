export const load = async ({ fetch }) => {
  const response = await fetch(`/api/splashart`);
  const splashart = await response.json();

  // return the character parts
  return {
    splashart,
  };
};
