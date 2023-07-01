import { error } from '@sveltejs/kit'

export async function load({ url, params }) {
    // get id from params
    const { id } = params

    try {
        const assetInformation = await Promise.all([
            fetch(`https://v2-api-testing.wanderer.moe/asset/${id}`).then(
                (res) => res.json()
            ),
        ])

        if (assetInformation[0].status === 'not found') {
            throw error(404, 'Asset not found')
        }

        return {
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
