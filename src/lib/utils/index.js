/* Explanation:
1. We pass in the location where we want to get the images from
2.  We create an empty array for the images
3.  We check the location and assign to the array all the images in the location
4.  We create an iterable array from the images
5.  We create a promise for all the images
6.  We iterate over the iterable array
7.  We split the path by / and pop the last element which is the name of the file, we then split the name by . and shift the first element which is the name of the file
8.  We assign the path to the variable
9.  We return a new object with the name and path of the image
10. We return the array with all the images (allImages) */

export const fetchImages = async (location) => {
    console.log('fetchImages', location)

    let allImageFiles = []

    switch (location) {
        case 'characterparts':
            allImageFiles = import.meta.glob('/static/images/characterparts/*.png')
            break
        case 'emotes':
            allImageFiles = import.meta.glob('/static/images/emotes/*.png')
            break
        case 'splashart':
            allImageFiles = import.meta.glob('/static/images/splashart/*.png')
            break
        case 'tcg':
            allImageFiles = import.meta.glob('/static/images/tcg/*.png')
            break
        default:
            throw new Error('Unrecognized image location')
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

/* Explanation on what this code does:
1. There is an an array of JSON files in the /src/data/characters folder (and /src/data/artifacts), each file is a character (and artifact) (uses meta.glob wildcard). 
2. Gets the fullName, rarity, element, weaponType (for characters) and just fullName, rarity (for artifacts) from each JSON file AND save the name of the file (the character name or artifact name). 
3. I then want to save that data in an array of objects (each object contains the name, rarity, (element, weaponType if applicable) and the filename of the JSON file).
4. Array is then retrurned.. */

export const fetchCharacterData = async (location) => {
    console.log('fetchCharacterData', location)
    let allDataFiles = []

    // if location is characters, then the path is /src/data/characters
    if (location == 'characters') {
        allDataFiles =
            import.meta.glob('/src/data/characters/*.json')
    }
    // get the name, rarity and element from each data file and return it as an array
    const iterableDataFiles = Object.entries(allDataFiles)

    const allData = await Promise.all(
        iterableDataFiles.map(async ([path]) => {
            const name = path.split('/').pop().split('.').shift()
            const data = await import(`../../data/characters/${name}.json`)
            const fullName = data.default.name
            const rarity = data.rarity
            const element = data.element
            const weaponType = data.weapontype
            const released = data.released ? data.released : true

            return {
                name: fullName,
                otherName: name,
                rarity: rarity,
                element: element,
                weaponType: weaponType,
                released: released,
            }
        })
    )
    return allData
}

export const fetchArtifactData = async (location) => {
    console.log('fetchArtifactData', location)
    let allDataFilesArtifact = []

    // if location is artifacts, then the path is /src/data/artifacts
    if (location == 'artifacts') {
        allDataFilesArtifact = import.meta.glob('/src/data/artifacts/*.json')
    }

    // get the name, rarity from each data file and return it as an array
    const iterableDataFiles = Object.entries(allDataFilesArtifact)

    const allData = await Promise.all(
        iterableDataFiles.map(async ([path]) => {
            const name = path.split('/').pop().split('.').shift()
            const data = await import(`../../data/artifacts/${name}.json`)
            const fullName = data.default.name.replace(/'/g, '')
            const rarity = data.rarity
            const released = data.released ? data.released : true

            return {
                name: fullName,
                otherName: name,
                rarity: rarity,
                released: released
            }
        })
    )
    return allData
}