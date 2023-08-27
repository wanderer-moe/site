export interface OCGeneratorResponse {
    success: boolean
    status: string
    uploaded: string
    key: string
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}
