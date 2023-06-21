import axios from 'axios'

export async function getDiscordData() {
    try {
        const {
            data: { presence_count: onlineUsers },
        } = await axios.get(
            'https://discord.com/api/guilds/982385887000272956/widget.json'
        )
        return onlineUsers
    } catch (e) {
        console.log('Error fetching discord data')
        return '???'
    }
}
