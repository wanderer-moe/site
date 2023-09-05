export interface SearchParams {
    game?: string
    query?: string
    asset?: string
    tags?: string
}

export interface Game {
    id: number
    name: string
    asset_count: number
    asset_categories: string | string[]
    category_count: number
    last_updated: string
    has_generator: boolean
}
