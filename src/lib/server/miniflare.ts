import type { storageOptions } from '$lib/types/miniflare'

export const createD1 = async (storageOptions) => {
    const { createSQLiteDB } = await import('@miniflare/shared')
    const { D1Database, D1DatabaseAPI } = await import('@miniflare/d1')
    const sqliteDb = await createSQLiteDB(
        storageOptions.type === 'memory' ? ':memory:' : storageOptions.path
    )
    return new D1Database(new D1DatabaseAPI(sqliteDb))
}
