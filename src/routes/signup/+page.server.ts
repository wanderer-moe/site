import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { AuthApiError } from '@supabase/supabase-js'

// TODO: signup logic, add user to users table:
// uuid: uuid from auth
// email: string
// username: string
// created_at: timestamp
// updated_at: timestamp
// avatar_url: string
// connections: json (e.g { discord: { id: string, username: string } }) default to blank object
// role: string
