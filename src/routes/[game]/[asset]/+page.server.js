import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game, asset } = params
    try {
        const res = await fetch(
            `https://api.wanderer.moe/game/${game}/${asset}`
        )
        if (res.ok) {
            const response = await res.json()
            if (response.error) throw error(404, 'API Error or Page Not Found')
            return {
                response,
                game,
                asset,
                images: response.images,
            }
        }
    } catch (err) {
        throw error(404, 'API Error or Page Not Found')
    }
}
