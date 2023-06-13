import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game } = params
    try {
        const res = await fetch(`https://api.wanderer.moe/oc-generator/${game}`)

        if (res.ok) {
            const response = await res.json()
            const data = {
                game,
                jsonFile: response.json,
            }
            return data
        }
    } catch (err) {
        // TODO: return correct code dependant on API error or page not found
        throw error(404, 'API Error or Page Not Found')
    }
}
