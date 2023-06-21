export interface CommitAuthor {
    name: string
    date: string
}

export interface Commit {
    commitMsg: string
    authorInfo: {
        name: string
        username: string
        date: string
    }
    shaSpliced: string
    sha: string
}

export interface Release {
    tag: string
    name: string
    url: string
    body: string
    author?: string
    date: string
}
