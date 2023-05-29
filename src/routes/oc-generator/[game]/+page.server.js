import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game } = params
    try {
        const res = await fetch(`https://api.wanderer.moe/oc-generator/${game}`)

        if (res.ok) {
            const response = await res.json()
            return {
                game,
                jsonFile: response.json,
            }
        }
    } catch (err) {
        throw error(404, 'API Error or Page Not Found')
    }
}
