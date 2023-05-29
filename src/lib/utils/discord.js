import axios from "axios";

export async function getDiscordData() {
  let onlineUsers;
  try {
    const response = await axios.get(
      "https://discord.com/api/guilds/982385887000272956/widget.json"
    );
    onlineUsers = response.data.presence_count;
  } catch (e) {
    console.log("Error fetching discord data");
    onlineUsers = "???";
  }
  return onlineUsers;
}
