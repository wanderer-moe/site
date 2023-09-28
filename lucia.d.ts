/// <reference types="lucia" />
declare namespace Lucia {
    type DatabaseUserAttributes = {
        avatar_url: string | null
        banner_url: string | null
        username: string
        username_colour: string | null
        email: string
        email_verified: number
        pronouns: string | null
        verified: number
        bio: string | null
        date_joined: number
        role_flags: number
        is_contributor: number
        self_assignable_role_flags: number | null
    }
    type DatabaseSessionAttributes = {
        country_code: string
        user_agent: string
        ip_address: string
    }
}
