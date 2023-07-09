import { error } from '@sveltejs/kit'

export async function load({ url, params, fetch }) {
    // get id from params
    const { id } = params

    // TODO: finalize schema && rewrite
    try {
        const assetInformation = await fetch(
            `https://v2-api-testing.wanderer.moe/asset/${id}`
        ).then((res) => res.json())

        if (assetInformation.status === 'not found') {
            throw error(404, 'Asset not found')
        }

        return {
            id,
            assetInformation,
        }
    } catch (err) {
        if (err.status === 404) {
            throw err
        } else {
            throw error(500, err)
        }
    }
}
