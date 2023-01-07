export const load = async ({ fetch }) => {
  const response = await fetch(`/api/artifacts`);
  const artifacts = await response.json();

  // return the characters
  return {
    artifacts,
  };
};
