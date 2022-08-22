export async function load({ params, fetch }) {
	const { id } = params;
	const jsonFile = await import(`../../../data/artifacts/${id}.json`);

	return { id, jsonFile }
}
