// src/routes/api/posts/+server.js
import {
    fetchImages
} from '$lib/utils'
import {
    json
} from '@sveltejs/kit'

export const GET = async () => {
    const allImages = await fetchImages('emotes')

    return json(allImages)
}