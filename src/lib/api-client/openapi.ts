import z from 'zod'

export type get_V2gameall = typeof get_V2gameall
export const get_V2gameall = {
    method: z.literal('GET'),
    path: z.literal('/v2/game/all'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        games: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                formattedName: z.string(),
                possibleSuggestiveContent: z.boolean(),
                lastUpdated: z.string(),
            }),
        ),
    }),
}

export type get_V2gameId = typeof get_V2gameId
export const get_V2gameId = {
    method: z.literal('GET'),
    path: z.literal('/v2/game/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        game: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            possibleSuggestiveContent: z.boolean(),
            lastUpdated: z.string(),
        }),
    }),
}

export type patch_V2gameIdmodify = typeof patch_V2gameIdmodify
export const patch_V2gameIdmodify = {
    method: z.literal('PATCH'),
    path: z.literal('/v2/game/{id}/modify'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
            possibleSuggestiveContent: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        game: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            possibleSuggestiveContent: z.boolean(),
            lastUpdated: z.string(),
        }),
    }),
}

export type delete_V2gameIddelete = typeof delete_V2gameIddelete
export const delete_V2gameIddelete = {
    method: z.literal('DELETE'),
    path: z.literal('/v2/game/{id}/delete'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2gamecreate = typeof post_V2gamecreate
export const post_V2gamecreate = {
    method: z.literal('POST'),
    path: z.literal('/v2/game/create'),
    parameters: z.object({
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
            possibleSuggestiveContent: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        game: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            possibleSuggestiveContent: z.boolean(),
            lastUpdated: z.string(),
        }),
    }),
}

export type get_V2assetsearch = typeof get_V2assetsearch
export const get_V2assetsearch = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/search'),
    parameters: z.object({
        query: z.object({
            name: z.string().optional(),
            game: z.string().optional(),
            category: z.string().optional(),
            tags: z.string().optional(),
            offset: z.string().optional(),
            limit: z.string().optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        assets: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                extension: z.string(),
                url: z.string(),
                assetCategoryId: z.string(),
                gameId: z.string(),
                viewCount: z.number(),
                downloadCount: z.number(),
                uploadedDate: z.string(),
                fileSize: z.number(),
                width: z.number(),
                height: z.number(),
                assetTagAsset: z.array(
                    z.object({
                        assetTag: z.object({
                            id: z.string(),
                            formattedName: z.string(),
                        }),
                    }),
                ),
            }),
        ),
    }),
}

export type post_V2assetupload = typeof post_V2assetupload
export const post_V2assetupload = {
    method: z.literal('POST'),
    path: z.literal('/v2/asset/upload'),
    parameters: z.object({
        body: z.object({
            asset: z.union([z.unknown(), z.undefined()]).optional(),
            name: z.string(),
            tags: z.union([z.string(), z.undefined()]).optional(),
            assetCategoryId: z.string(),
            gameId: z.string(),
            assetIsSuggestive: z.string(),
            allowComments: z.union([z.string(), z.undefined()]).optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2assetId = typeof get_V2assetId
export const get_V2assetId = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        asset: z.object({
            id: z.string(),
            name: z.string(),
            extension: z.string(),
            url: z.string(),
            viewCount: z.number(),
            downloadCount: z.number(),
            uploadedDate: z.string(),
            fileSize: z.number(),
            width: z.number(),
            height: z.number(),
            assetTagAsset: z.array(
                z.object({
                    assetTag: z.object({
                        id: z.string(),
                        formattedName: z.string(),
                    }),
                }),
            ),
            authUser: z.object({
                id: z.string(),
                avatarUrl: z.union([z.string(), z.null()]),
                displayName: z.union([z.string(), z.null()]),
                username: z.string(),
                usernameColour: z.union([z.string(), z.null()]),
                plan: z.string(),
                role: z.string(),
            }),
            game: z.object({
                id: z.string(),
                formattedName: z.string(),
            }),
            assetCategory: z.object({
                id: z.string(),
                formattedName: z.string(),
            }),
        }),
        assetLikes: z.number(),
    }),
}

export type get_V2assetIddownload = typeof get_V2assetIddownload
export const get_V2assetIddownload = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/{id}/download'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.unknown(),
}

export type patch_V2assetIdmodify = typeof patch_V2assetIdmodify
export const patch_V2assetIdmodify = {
    method: z.literal('PATCH'),
    path: z.literal('/v2/asset/{id}/modify'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
        body: z.object({
            name: z.string().optional(),
            tags: z.string().optional(),
            assetCategoryId: z.string().optional(),
            gameId: z.string().optional(),
            allowComments: z.string().optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type delete_V2assetIddelete = typeof delete_V2assetIddelete
export const delete_V2assetIddelete = {
    method: z.literal('DELETE'),
    path: z.literal('/v2/asset/{id}/delete'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2assetIdlike = typeof post_V2assetIdlike
export const post_V2assetIdlike = {
    method: z.literal('POST'),
    path: z.literal('/v2/asset/{id}/like'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2assetIdunlike = typeof post_V2assetIdunlike
export const post_V2assetIdunlike = {
    method: z.literal('POST'),
    path: z.literal('/v2/asset/{id}/unlike'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2assetlikes = typeof get_V2assetlikes
export const get_V2assetlikes = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/likes'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        likes: z.array(
            z.object({
                assetId: z.string(),
                likedById: z.string(),
                createdAt: z.string(),
                asset: z.object({
                    id: z.string(),
                    name: z.string(),
                    extension: z.string(),
                    gameId: z.string(),
                    assetCategoryId: z.string(),
                    uploadedById: z.string(),
                    uploadedByName: z.string(),
                    url: z.string(),
                    status: z.string(),
                    uploadedDate: z.string(),
                    assetIsSuggestive: z.boolean(),
                    allowComments: z.boolean(),
                    viewCount: z.number(),
                    downloadCount: z.number(),
                    fileSize: z.number(),
                    width: z.number(),
                    height: z.number(),
                    assetTagAsset: z.array(
                        z.object({
                            assetTagId: z.string(),
                            assetId: z.string(),
                            assetTag: z.object({
                                id: z.string(),
                                name: z.string(),
                                formattedName: z.string(),
                                lastUpdated: z.string(),
                            }),
                        }),
                    ),
                }),
            }),
        ),
    }),
}

export type get_V2assetIdcomments = typeof get_V2assetIdcomments
export const get_V2assetIdcomments = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/{id}/comments'),
    parameters: z.object({
        query: z.object({
            offset: z.string().optional(),
        }),
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        comments: z.array(
            z.object({
                id: z.string(),
                parentCommentId: z.union([z.string(), z.null()]),
                commentedById: z.string(),
                comment: z.string(),
                createdAt: z.string(),
                hasReplies: z.boolean(),
                likes: z.number(),
            }),
        ),
    }),
}

export type get_V2assetcommentIdreplies = typeof get_V2assetcommentIdreplies
export const get_V2assetcommentIdreplies = {
    method: z.literal('GET'),
    path: z.literal('/v2/asset/comment/{id}/replies'),
    parameters: z.object({
        query: z.object({
            offset: z.string().optional(),
        }),
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        replies: z.array(
            z.object({
                id: z.string(),
                parentCommentId: z.union([z.string(), z.null()]),
                commentedById: z.string(),
                comment: z.string(),
                createdAt: z.string(),
                hasReplies: z.boolean(),
                likes: z.number(),
            }),
        ),
    }),
}

export type get_V2categoryall = typeof get_V2categoryall
export const get_V2categoryall = {
    method: z.literal('GET'),
    path: z.literal('/v2/category/all'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        categories: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                formattedName: z.string(),
                lastUpdated: z.string(),
            }),
        ),
    }),
}

export type get_V2categoryId = typeof get_V2categoryId
export const get_V2categoryId = {
    method: z.literal('GET'),
    path: z.literal('/v2/category/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        category: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type post_V2categorycreate = typeof post_V2categorycreate
export const post_V2categorycreate = {
    method: z.literal('POST'),
    path: z.literal('/v2/category/create'),
    parameters: z.object({
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        assetCategory: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type patch_V2categoryIdmodify = typeof patch_V2categoryIdmodify
export const patch_V2categoryIdmodify = {
    method: z.literal('PATCH'),
    path: z.literal('/v2/category/{id}/modify'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        assetCategory: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type delete_V2categoryIddelete = typeof delete_V2categoryIddelete
export const delete_V2categoryIddelete = {
    method: z.literal('DELETE'),
    path: z.literal('/v2/category/{id}/delete'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2tagsall = typeof get_V2tagsall
export const get_V2tagsall = {
    method: z.literal('GET'),
    path: z.literal('/v2/tags/all'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        tags: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                formattedName: z.string(),
                lastUpdated: z.string(),
            }),
        ),
    }),
}

export type get_V2tagsId = typeof get_V2tagsId
export const get_V2tagsId = {
    method: z.literal('GET'),
    path: z.literal('/v2/tags/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        tag: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type post_V2tagscreate = typeof post_V2tagscreate
export const post_V2tagscreate = {
    method: z.literal('POST'),
    path: z.literal('/v2/tags/create'),
    parameters: z.object({
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        tag: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type patch_V2tagsIdmodify = typeof patch_V2tagsIdmodify
export const patch_V2tagsIdmodify = {
    method: z.literal('PATCH'),
    path: z.literal('/v2/tags/{id}/modify'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
        body: z.object({
            name: z.string(),
            formattedName: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        tag: z.object({
            id: z.string(),
            name: z.string(),
            formattedName: z.string(),
            lastUpdated: z.string(),
        }),
    }),
}

export type delete_V2tagsIddelete = typeof delete_V2tagsIddelete
export const delete_V2tagsIddelete = {
    method: z.literal('DELETE'),
    path: z.literal('/v2/tags/{id}/delete'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2userId = typeof get_V2userId
export const get_V2userId = {
    method: z.literal('GET'),
    path: z.literal('/v2/user/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        user: z.object({
            id: z.string(),
            avatarUrl: z.union([z.string(), z.null()]),
            displayName: z.union([z.string(), z.null()]),
            username: z.string(),
            usernameColour: z.union([z.string(), z.null()]),
            pronouns: z.union([z.string(), z.null()]),
            verified: z.number(),
            bio: z.string(),
            dateJoined: z.string(),
            plan: z.string(),
            role: z.string(),
        }),
    }),
}

export type get_V2usersearchUsername = typeof get_V2usersearchUsername
export const get_V2usersearchUsername = {
    method: z.literal('GET'),
    path: z.literal('/v2/user/search/{username}'),
    parameters: z.object({
        path: z.object({
            username: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        users: z.array(
            z.object({
                id: z.string(),
                avatarUrl: z.union([z.string(), z.null()]),
                displayName: z.union([z.string(), z.null()]),
                username: z.string(),
                usernameColour: z.union([z.string(), z.null()]),
                pronouns: z.union([z.string(), z.null()]),
                verified: z.number(),
                bio: z.string(),
                dateJoined: z.string(),
                plan: z.string(),
                role: z.string(),
            }),
        ),
    }),
}

export type get_V2userIdfollowers = typeof get_V2userIdfollowers
export const get_V2userIdfollowers = {
    method: z.literal('GET'),
    path: z.literal('/v2/user/{id}/followers'),
    parameters: z.object({
        query: z.object({
            offset: z.string().optional(),
        }),
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        followers: z.array(
            z.object({
                followerId: z.string(),
                followingId: z.string(),
                createdAt: z.string(),
                follower: z.object({
                    id: z.string(),
                    avatarUrl: z.union([z.string(), z.null()]),
                    username: z.string(),
                    plan: z.string(),
                    verified: z.number(),
                    displayName: z.union([z.string(), z.null()]),
                }),
            }),
        ),
    }),
}

export type get_V2userIdfollowing = typeof get_V2userIdfollowing
export const get_V2userIdfollowing = {
    method: z.literal('GET'),
    path: z.literal('/v2/user/{id}/following'),
    parameters: z.object({
        query: z.object({
            offset: z.string().optional(),
        }),
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        following: z.array(
            z.object({
                followerId: z.string(),
                followingId: z.string(),
                createdAt: z.string(),
                following: z.object({
                    id: z.string(),
                    avatarUrl: z.union([z.string(), z.null()]),
                    username: z.string(),
                    plan: z.string(),
                    verified: z.number(),
                    displayName: z.union([z.string(), z.null()]),
                }),
            }),
        ),
    }),
}

export type post_V2userIdfollow = typeof post_V2userIdfollow
export const post_V2userIdfollow = {
    method: z.literal('POST'),
    path: z.literal('/v2/user/{id}/follow'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2userIdunfollow = typeof post_V2userIdunfollow
export const post_V2userIdunfollow = {
    method: z.literal('POST'),
    path: z.literal('/v2/user/{id}/unfollow'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2userIdblock = typeof post_V2userIdblock
export const post_V2userIdblock = {
    method: z.literal('POST'),
    path: z.literal('/v2/user/{id}/block'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2contributorsall = typeof get_V2contributorsall
export const get_V2contributorsall = {
    method: z.literal('GET'),
    path: z.literal('/v2/contributors/all'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        contributors: z.array(
            z.object({
                id: z.string(),
                username: z.string(),
                avatarUrl: z.union([z.string(), z.null()]),
                displayName: z.union([z.string(), z.null()]),
                usernameColour: z.union([z.string(), z.null()]),
                plan: z.string(),
                role: z.string(),
            }),
        ),
    }),
}

export type post_V2authcreate = typeof post_V2authcreate
export const post_V2authcreate = {
    method: z.literal('POST'),
    path: z.literal('/v2/auth/create'),
    parameters: z.object({
        body: z.object({
            username: z.string(),
            email: z.string(),
            password: z.string(),
            passwordConfirmation: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2authlogin = typeof post_V2authlogin
export const post_V2authlogin = {
    method: z.literal('POST'),
    path: z.literal('/v2/auth/login'),
    parameters: z.object({
        body: z.object({
            email: z.string(),
            password: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2authvalidate = typeof get_V2authvalidate
export const get_V2authvalidate = {
    method: z.literal('GET'),
    path: z.literal('/v2/auth/validate'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        user: z.object({
            id: z.string(),
            avatarUrl: z.union([z.string(), z.null()]),
            bannerUrl: z.union([z.string(), z.null()]),
            displayName: z.union([z.string(), z.null()]),
            username: z.string(),
            usernameColour: z.union([z.string(), z.null()]),
            email: z.string(),
            emailVerified: z.number(),
            pronouns: z.union([z.string(), z.null()]),
            verified: z.number(),
            bio: z.string(),
            dateJoined: z.string(),
            plan: z.string(),
            isBanned: z.boolean(),
            isContributor: z.boolean(),
            role: z.string(),
        }),
        session: z.object({
            id: z.string(),
            userId: z.string(),
            expiresAt: z.string(),
            userAgent: z.string(),
            countryCode: z.string(),
            ipAddress: z.string(),
        }),
    }),
}

export type get_V2authinvalidateId = typeof get_V2authinvalidateId
export const get_V2authinvalidateId = {
    method: z.literal('GET'),
    path: z.literal('/v2/auth/invalidate/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2authsessions = typeof get_V2authsessions
export const get_V2authsessions = {
    method: z.literal('GET'),
    path: z.literal('/v2/auth/sessions'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
        currentSessions: z.array(
            z.object({
                id: z.string(),
                expiresAt: z.string(),
            }),
        ),
    }),
}

export type get_V2authlogout = typeof get_V2authlogout
export const get_V2authlogout = {
    method: z.literal('GET'),
    path: z.literal('/v2/auth/logout'),
    parameters: z.never(),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2authuploadavatar = typeof post_V2authuploadavatar
export const post_V2authuploadavatar = {
    method: z.literal('POST'),
    path: z.literal('/v2/auth/upload/avatar'),
    parameters: z.object({
        body: z.object({
            avatar: z.unknown().optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2authuploadbanner = typeof post_V2authuploadbanner
export const post_V2authuploadbanner = {
    method: z.literal('POST'),
    path: z.literal('/v2/auth/upload/banner'),
    parameters: z.object({
        body: z.object({
            banner: z.unknown().optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type get_V2requestall = typeof get_V2requestall
export const get_V2requestall = {
    method: z.literal('GET'),
    path: z.literal('/v2/request/all'),
    parameters: z.object({
        query: z.object({
            offset: z.string().optional(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        requests: z.array(
            z.object({
                id: z.string(),
                userId: z.string(),
                area: z.string(),
                title: z.string(),
                description: z.string(),
                upvotesCount: z.union([z.number(), z.undefined()]).optional(),
            }),
        ),
    }),
}

export type get_V2requestId = typeof get_V2requestId
export const get_V2requestId = {
    method: z.literal('GET'),
    path: z.literal('/v2/request/{id}'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        request: z.object({
            id: z.string(),
            userId: z.string(),
            area: z.string(),
            title: z.string(),
            description: z.string(),
        }),
    }),
}

export type post_V2requestIdupvote = typeof post_V2requestIdupvote
export const post_V2requestIdupvote = {
    method: z.literal('POST'),
    path: z.literal('/v2/request/{id}/upvote'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2requestIddownvote = typeof post_V2requestIddownvote
export const post_V2requestIddownvote = {
    method: z.literal('POST'),
    path: z.literal('/v2/request/{id}/downvote'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

export type post_V2requestcreate = typeof post_V2requestcreate
export const post_V2requestcreate = {
    method: z.literal('POST'),
    path: z.literal('/v2/request/create'),
    parameters: z.object({
        body: z.object({
            title: z.string(),
            area: z.string(),
            description: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
        response: z.object({
            id: z.string(),
            userId: z.string(),
            area: z.string(),
            title: z.string(),
            description: z.string(),
        }),
    }),
}

export type delete_V2requestIddelete = typeof delete_V2requestIddelete
export const delete_V2requestIddelete = {
    method: z.literal('DELETE'),
    path: z.literal('/v2/request/{id}/delete'),
    parameters: z.object({
        path: z.object({
            id: z.string(),
        }),
    }),
    response: z.object({
        success: z.literal('true'),
    }),
}

// <EndpointByMethod>
export const EndpointByMethod = {
    get: {
        '/v2/game/all': get_V2gameall,
        '/v2/game/{id}': get_V2gameId,
        '/v2/asset/search': get_V2assetsearch,
        '/v2/asset/{id}': get_V2assetId,
        '/v2/asset/{id}/download': get_V2assetIddownload,
        '/v2/asset/likes': get_V2assetlikes,
        '/v2/asset/{id}/comments': get_V2assetIdcomments,
        '/v2/asset/comment/{id}/replies': get_V2assetcommentIdreplies,
        '/v2/category/all': get_V2categoryall,
        '/v2/category/{id}': get_V2categoryId,
        '/v2/tags/all': get_V2tagsall,
        '/v2/tags/{id}': get_V2tagsId,
        '/v2/user/{id}': get_V2userId,
        '/v2/user/search/{username}': get_V2usersearchUsername,
        '/v2/user/{id}/followers': get_V2userIdfollowers,
        '/v2/user/{id}/following': get_V2userIdfollowing,
        '/v2/contributors/all': get_V2contributorsall,
        '/v2/auth/validate': get_V2authvalidate,
        '/v2/auth/invalidate/{id}': get_V2authinvalidateId,
        '/v2/auth/sessions': get_V2authsessions,
        '/v2/auth/logout': get_V2authlogout,
        '/v2/request/all': get_V2requestall,
        '/v2/request/{id}': get_V2requestId,
    },
    patch: {
        '/v2/game/{id}/modify': patch_V2gameIdmodify,
        '/v2/asset/{id}/modify': patch_V2assetIdmodify,
        '/v2/category/{id}/modify': patch_V2categoryIdmodify,
        '/v2/tags/{id}/modify': patch_V2tagsIdmodify,
    },
    delete: {
        '/v2/game/{id}/delete': delete_V2gameIddelete,
        '/v2/asset/{id}/delete': delete_V2assetIddelete,
        '/v2/category/{id}/delete': delete_V2categoryIddelete,
        '/v2/tags/{id}/delete': delete_V2tagsIddelete,
        '/v2/request/{id}/delete': delete_V2requestIddelete,
    },
    post: {
        '/v2/game/create': post_V2gamecreate,
        '/v2/asset/upload': post_V2assetupload,
        '/v2/asset/{id}/like': post_V2assetIdlike,
        '/v2/asset/{id}/unlike': post_V2assetIdunlike,
        '/v2/category/create': post_V2categorycreate,
        '/v2/tags/create': post_V2tagscreate,
        '/v2/user/{id}/follow': post_V2userIdfollow,
        '/v2/user/{id}/unfollow': post_V2userIdunfollow,
        '/v2/user/{id}/block': post_V2userIdblock,
        '/v2/auth/create': post_V2authcreate,
        '/v2/auth/login': post_V2authlogin,
        '/v2/auth/upload/avatar': post_V2authuploadavatar,
        '/v2/auth/upload/banner': post_V2authuploadbanner,
        '/v2/request/{id}/upvote': post_V2requestIdupvote,
        '/v2/request/{id}/downvote': post_V2requestIddownvote,
        '/v2/request/create': post_V2requestcreate,
    },
}
export type EndpointByMethod = typeof EndpointByMethod
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get']
export type PatchEndpoints = EndpointByMethod['patch']
export type DeleteEndpoints = EndpointByMethod['delete']
export type PostEndpoints = EndpointByMethod['post']
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod]
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
    body?: unknown
    query?: Record<string, unknown>
    header?: Record<string, unknown>
    path?: Record<string, unknown>
}

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete'
export type Method = 'get' | 'head' | MutationMethod

export type DefaultEndpoint = {
    parameters?: EndpointParameters | undefined
    response: unknown
}

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
    operationId: string
    method: Method
    path: string
    parameters?: TConfig['parameters']
    meta: {
        alias: string
        hasParameters: boolean
        areParametersRequired: boolean
    }
    response: TConfig['response']
}

type Fetcher = (
    method: Method,
    url: string,
    parameters?: EndpointParameters | undefined,
) => Promise<Endpoint['response']>

type RequiredKeys<T> = {
    [P in keyof T]-?: undefined extends T[P] ? never : P
}[keyof T]

type MaybeOptionalArg<T> =
    RequiredKeys<T> extends never ? [config?: T] : [config: T]

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
    baseUrl: string = ''

    constructor(public fetcher: Fetcher) {}

    setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl
        return this
    }

    // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
        path: Path,
        ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
    ): Promise<z.infer<TEndpoint['response']>> {
        return this.fetcher('get', this.baseUrl + path, params[0]) as Promise<
            z.infer<TEndpoint['response']>
        >
    }
    // </ApiClient.get>

    // <ApiClient.patch>
    patch<
        Path extends keyof PatchEndpoints,
        TEndpoint extends PatchEndpoints[Path],
    >(
        path: Path,
        ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
    ): Promise<z.infer<TEndpoint['response']>> {
        return this.fetcher('patch', this.baseUrl + path, params[0]) as Promise<
            z.infer<TEndpoint['response']>
        >
    }
    // </ApiClient.patch>

    // <ApiClient.delete>
    delete<
        Path extends keyof DeleteEndpoints,
        TEndpoint extends DeleteEndpoints[Path],
    >(
        path: Path,
        ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
    ): Promise<z.infer<TEndpoint['response']>> {
        return this.fetcher(
            'delete',
            this.baseUrl + path,
            params[0],
        ) as Promise<z.infer<TEndpoint['response']>>
    }
    // </ApiClient.delete>

    // <ApiClient.post>
    post<
        Path extends keyof PostEndpoints,
        TEndpoint extends PostEndpoints[Path],
    >(
        path: Path,
        ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
    ): Promise<z.infer<TEndpoint['response']>> {
        return this.fetcher('post', this.baseUrl + path, params[0]) as Promise<
            z.infer<TEndpoint['response']>
        >
    }
    // </ApiClient.post>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
    return new ApiClient(fetcher).setBaseUrl(
        'http://v2-staging-api.wanderer.moe' ?? '',
    )
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
