export const load = async ({ fetch }) => {
  const response = await fetch(`/api/tcg`);
  const tcg = await response.json();

  // return the character parts
  return {
    tcg,
  };
};
