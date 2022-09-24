export const load = async ({
    fetch
}) => {
    const response = await fetch(`/api/emotes`)
    const emotes = await response.json()

    // return the emotes
    return {
        emotes
    }
}