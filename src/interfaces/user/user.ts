export interface User {
    avatarUrl: null | string
    bannerUrl: null | string
    username: string
    usernameColour: null | string
    email: string
    emailVerified: number
    pronouns: null | string
    verified: number
    bio: string
    dateJoined: number
    roleFlags: number
    isContributor: number
    selfAssignableRoleFlags: null | number
    userId: string
}

export interface SessionData {
    userAgent: string | null
    countryCode: string | null
    ipAddress: string | null
    user: User
    sessionId: string
    activePeriodExpiresAt: string
    idlePeriodExpiresAt: string
    state: string
    fresh: boolean
}
