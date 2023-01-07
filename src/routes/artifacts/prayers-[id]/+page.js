export async function load({ params, fetch }) {
  const { id } = params;
  const jsonFile = await import(`../../../data/artifacts/prayers-${id}.json`);

  return { id, jsonFile };
}
