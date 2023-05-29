import axios from "axios";

export async function getCommitsRecent(perPage) {
    try {
        // https://docs.github.com/en/rest/reference/repos#list-commits
        const response = await axios.get(
            `https://api.github.com/repos/dromzeh/wanderer.moe/commits?per_page=${perPage}`
        );
        const commits = response.data.map((commit) => {
            let commitMsg = commit.commit.message;
            if (commitMsg.includes("\n")) {
                commitMsg = commitMsg.split("\n")[0];
            }
            const email = commit.commit.author.email;
            const name = commit.commit.author.name;
            const authorInfo = {
                name: name,
                username: email.split("+")[1].split("@")[0],
                date: commit.commit.author.date,
            };
            const sha = commit.sha;
            const shaSpliced = sha.substring(0, 7);
            return { commitMsg, authorInfo, shaSpliced, sha };
        });
        return commits;
    } catch (error) {
        // returns empty array
        console.log(error);
        return [];
    }
}
