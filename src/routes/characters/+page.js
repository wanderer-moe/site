export const load = async ({
    fetch
}) => {
    const response = await fetch(`/api/characters`)
    const characters = await response.json()

    // return the characters
    return {
        characters
    }
}