/// <reference types="lucia-auth" />
declare namespace Lucia {
    type Auth = import('$lib/server/lucia').Auth
    type UserAttributes = {
        username: string
        roles: string
        connections: string
        email: string
        email_verified: int
    }
}

/// <reference types="@sveltejs/kit" />
declare namespace App {
    interface Locals {
        auth: import('lucia-auth').AuthRequest
    }
}
