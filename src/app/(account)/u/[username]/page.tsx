import { Asset } from '@/interfaces/asset/asset'
import { User } from '@/interfaces/user/user'
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
        `$(
            siteConfig.urls.api
        )/user/u/${username}`,
    )
    console.log(res)
    const { user, uploadedAssets } = await res.json()
    return { user, uploadedAssets }
}

async function UserPage({
    params: { username },
}: {
    params: { username: string }
}) {
    const { user, uploadedAssets } = await getUser(username)

    return <div></div>
}

export default UserPage
