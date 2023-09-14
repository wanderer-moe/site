export interface OCGeneratorResponse {
    success: boolean
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}
