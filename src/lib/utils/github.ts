import axios from 'axios'
import type { CommitAuthor, Commit, Release } from '../../types/github'

// gets the latest commits
export async function getCommitsRecent(perPage?: number): Promise<Commit[]> {
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
                    commit: { message, author },
                    author: { login: username },
                    sha,
                }: any) => {
                    let commitMsg = message
                    if (commitMsg.includes('\n')) {
                        commitMsg = commitMsg.split('\n')[0]
                    }
                    const shaSpliced = sha.slice(0, 7)
                    return {
                        commitMsg,
                        authorInfo: {
                            name: author.name,
                            username,
                            date: author.date,
                        },
                        shaSpliced,
                        sha,
                    }
                }
            )
        )

        return commits
    } catch (error) {
        console.error(error)
        return []
    }
}

// gets the latest release
export async function getReleases(releaseCount?: number): Promise<Release[]> {
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
                }: any) => {
                    if (!date) return null
                    return { tag, name, url, body, author, date }
                }
            )
        )

        return releases.filter(Boolean)
    } catch (error) {
        console.error(error)
        return []
    }
}
