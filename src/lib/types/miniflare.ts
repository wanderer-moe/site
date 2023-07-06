type mem = {
    type: 'memory'
}

type file = {
    type: 'file'
    path: string
}

export type storageOptions = mem | file
