import { User } from '@/interfaces/user/user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { get } from 'lodash'

interface UserResponse {
    success: boolean
    status: string
    accountIsAuthed: boolean
    userIsQueryingOwnAccount: boolean
    userRoleFlagsArray: string[]
    userSelfAssignableRoleFlagsArray: string[]
    user: User
}

export const runtime = 'edge'

async function getUser(username: string): Promise<UserResponse> {
    const res = await fetch(
        `http://localhost:8787/v2/search/users/user/${username}`,
    )
    const response = await res.json()
    return response as UserResponse
}

type Props = {
    params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { username } = params
    const { user } = await getUser(username)
    if (!user) return notFound()

    return {
        title: `@${user.username} - wanderer.moe`,
        description: `Information about ${user.username}`,
    }
}

async function UserPage({
    params: { username },
}: {
    params: { username: string }
}) {
    const { user } = await getUser(username)

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-2">
                {Object.keys(user).map((key) => (
                    <div className="flex flex-row gap-2" key={key}>
                        <p className="font-bold">{key}</p>
                        <p>{get(user, key)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserPage
