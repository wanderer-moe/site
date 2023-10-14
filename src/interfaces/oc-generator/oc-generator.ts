export interface OCGeneratorResponse {
    success: boolean
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}

export interface DataHandlerProps {
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}
