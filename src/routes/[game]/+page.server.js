import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game } = params
    try {
        const res = await fetch(`https://api.wanderer.moe/game/${game}`)
        if (res.ok) {
            const response = await res.json()
            if (response.error) throw error(404, 'API Error or Page Not Found')
            const data = {
                game,
                subFolders: response.locations,
            }
            return data
        }
    } catch (err) {
        throw error(404, 'API Error or Page Not Found')
    }
}
