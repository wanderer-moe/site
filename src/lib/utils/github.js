import axios from 'axios'

// gets the latest commits
export async function getCommitsRecent(perPage) {
    try {
        const branch = window.location.href.startsWith('https://wanderer.moe/')
            ? 'main'
            : 'development' // shows main branch on production, development branch on other environments

        const { data } = await axios.get(
            `https://api.github.com/repos/wanderer-moe/site/commits?per_page=${perPage}&sha=${branch}`
        )
        const commits = await Promise.all(
            data.map(
                async ({
                    commit: {
                        message,
                        author: { name, date },
                    },
                    author: { login: username },
                    sha,
                }) => {
                    let commitMsg = message
                    if (commitMsg.includes('\n')) {
                        commitMsg = commitMsg.split('\n')[0]
                    }
                    const shaSpliced = sha.slice(0, 7)
                    return {
                        commitMsg,
                        authorInfo: { name, username, date },
                        shaSpliced,
                        sha,
                    }
                }
            )
        )
        return commits
    } catch (error) {
        console.log(error)
        return []
    }
}

// gets the latest release
export async function getReleases(releaseCount) {
    try {
        const { data } = await axios.get(
            `https://api.github.com/repos/wanderer-moe/site/releases?per_page=${releaseCount}`
        )
        const releases = await Promise.all(
            data.map(
                async ({
                    tag_name: tag,
                    name,
                    html_url: url,
                    body = '',
                    author: { login: author },
                    published_at: date,
                }) => {
                    if (!date) return null
                    return { tag, name, url, body, author, date }
                }
            )
        )
        return releases.filter(Boolean)
    } catch (error) {
        console.log(error)
        return []
    }
}
