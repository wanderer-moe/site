export const fetchImages = async (location) => {
    console.log('fetchImages', location)
    let allImageFiles = []

    // if location is characterparts, then the path is /src/routes/api/characterparts
    if (location == 'characterparts') {
        allImageFiles =
            import.meta.glob('/static/images/characterparts/*.png')
    } else if (location == 'emotes') {
        allImageFiles =
            import.meta.glob('/static/images/emotes/*.png')
    } else if (location == 'splashart') {
        allImageFiles =
            import.meta.glob('/static/images/splashart/*.png')
    }

    const iterableImageFiles = Object.entries(allImageFiles)

    const allImages = await Promise.all(
        iterableImageFiles.map(async ([path]) => {
            const name = path.split('/').pop().split('.').shift()
            const imagePath = path

            return {
                name: name,
                path: imagePath,
            }
        })
    )

    return allImages
}