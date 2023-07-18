import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { username: string }
}

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata,
): Promise<Metadata> {
    const { username } = params
    const { user, uploadedAssets } = await getUser(username)

    return {
        title: `@${user.username} - wanderer.moe`,
        description: `Information about ${user.username}`,
    }
}

async function getUser(username: string) {
    const res = await fetch(
        `https://v2-api-testing.wanderer.moe/user/${username}`,
    )
    const { user, uploadedAssets } = await res.json()
    return { user, uploadedAssets }
}

async function Page({
    params: { username },
}: {
    params: { username: string }
}) {
    const { user, uploadedAssets } = await getUser(username)

    return <></>
}

export default Page
