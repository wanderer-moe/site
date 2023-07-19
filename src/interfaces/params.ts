export interface SearchParams {
    game?: string
    query?: string
    asset?: string
}

export interface Games {
    name: string
    id: number
    last_updated?: string
    assetCategories: string[]
}
