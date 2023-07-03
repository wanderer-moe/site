import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const authUser = sqliteTable('auth_user', {
    id: text('id').primaryKey(),
    email: text('email').notNull(),
    username: text('username').notNull(),
    isPlus: integer('is_plus').notNull(),
    avatarUrl: text('avatar_url').notNull(),
    pronouns: text('pronouns').notNull(),
    bio: text('bio').notNull(),
    connections: text('connections').notNull(),
    roles: text('roles').notNull(),
})

export const authSession = sqliteTable('auth_session', {
    id: text('id').primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => authUser.id),
    activeExpires: integer('active_expires').notNull(),
    idleExpires: integer('idle_expires').notNull(),
})

export const authKey = sqliteTable('auth_key', {
    id: text('id').primaryKey(),
    userId: text('user_id')
        .notNull()
        .references(() => authUser.id),
    primaryKey: integer('primary_key').notNull(),
    hashedPassword: text('hashed_password'),
    expires: integer('expires'),
})
