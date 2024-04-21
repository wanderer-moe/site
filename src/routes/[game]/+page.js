import { error } from '@sveltejs/kit'

export async function load({ params }) {
    const { game } = params

    const res = await fetch(`https://api.wanderer.moe/game/${game}`)

    if (res.ok) {
        const response = await res.json()

        if (response.error && response.error.includes('404')) {
            throw error(404, 'Route Not Found')
        } else if (response.status === 'error') {
            console.error('api error' + response)
            throw error(500, 'API Error')
        }

        const data = {
            game,
            subFolders: response.locations,
            lastUploaded: response.lastUploaded,
        }

        return data
    } else {
        console.error('error' + res)
        throw error(res.status, 'Error parsing API response')
    }
}
