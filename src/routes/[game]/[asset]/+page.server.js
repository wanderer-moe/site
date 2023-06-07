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
            const data = {
                response,
                game,
                asset,
                lastUploaded: response.lastUploaded,
                images: response.images,
            }
            return data
        }
    } catch (err) {
        throw error(404, 'API Error or Page Not Found')
    }
}
