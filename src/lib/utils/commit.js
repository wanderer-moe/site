import axios from 'axios'

export async function getCommitsRecent(perPage) {
    try {
        const branch = window.location.href.startsWith('https://wanderer.moe/') ? 'main' : 'development' // shows main branch on production, development branch on other environments

        // https://docs.github.com/en/rest/reference/repos#list-commits
        const response = await axios.get(
            `https://api.github.com/repos/wanderer-moe/site/commits?per_page=${perPage}&sha=${branch}`
        )
        const commits = response.data.map((commit) => {
            let commitMsg = commit.commit.message
            if (commitMsg.includes('\n')) {
                commitMsg = commitMsg.split('\n')[0]
            }

            const authorInfo = {
                name: commit.commit.author.name,
                username: commit.author.login,
                date: commit.commit.author.date,
            }
            const sha = commit.sha
            const shaSpliced = sha.substring(0, 7)
            return { commitMsg, authorInfo, shaSpliced, sha }
        })
        return commits
    } catch (error) {
        // returns empty array
        console.log(error)
        return []
    }
}
