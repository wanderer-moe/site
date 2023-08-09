import { Asset } from '@/interfaces/asset'
import { User } from '@/interfaces/user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const runtime = 'edge'

type Props = {
    params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { username } = params
    const { user, uploadedAssets } = await getUser(username)

    if (!user) return notFound()

    return {
        title: `@${user.username} - wanderer.moe`,
        description: `Information about ${user.username}`,
    }
}

async function getUser(
    username: string,
): Promise<{ user: User; uploadedAssets: Asset[] }> {
    const res = await fetch(
        `https://v2-api-testing.wanderer.moe/user/${username}`,
    )
    const { user, uploadedAssets } = await res.json()
    return { user, uploadedAssets }
}

async function UserPage({
    params: { username },
}: {
    params: { username: string }
}) {
    const { user, uploadedAssets } = await getUser(username)

    return <></>
}

export default UserPage
