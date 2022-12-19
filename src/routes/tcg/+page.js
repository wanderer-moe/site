export const load = async ({
    fetch
}) => {
    const response = await fetch(`/api/tcg`)
    const TCG = await response.json()

    // return the character parts
    return {
        TCG
    }
}