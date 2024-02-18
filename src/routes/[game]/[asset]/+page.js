import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game, asset } = params

    const res = await fetch(`https://api.wanderer.moe/game/${game}/${asset}`)

    if (res.ok) {
        const response = await res.json()

        if (response.error && response.error.includes('404')) {
            throw error(404, 'Route Not Found')
        } else if (response.status === 'error') {
            throw error(500, 'API Error')
        }

        const data = {
            response,
            game,
            asset,
            lastUploaded: response.lastUploaded,
            images: response.images,
        }

        return data
    } else {
        throw error(res.status, 'API Error')
    }
}
