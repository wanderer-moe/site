import axios from "axios";

export async function getCommitRecent() {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/dromzeh/wanderer.moe/commits?per_page=1"
    );
    let recentCommitMsg = response.data[0].commit.message;
    const email = response.data[0].commit.author.email;
    const name = response.data[0].commit.author.name;
    const authorInfo = {
      name: name,
      username: email.split("+")[1].split("@")[0],
      date: response.data[0].commit.author.date,
    };
    const sha = response.data[0].sha;
    const shaSpliced = sha.substring(0, 7);

    if (recentCommitMsg.includes("\n")) {
      recentCommitMsg = recentCommitMsg.split("\n")[0];
    }

    return { recentCommitMsg, authorInfo, shaSpliced, sha };
  } catch (error) {
    console.error(error);
    return { recentCommitMsg: "", authorInfo: "", shaSpliced: "", sha: "" };
  }
}
