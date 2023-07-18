import { Metadata, ResolvingMetadata } from 'next'
import { Asset } from '@/interfaces/asset'

async function getAsset(id: string) {
    const res = await fetch(`https://v2-api-testing.wanderer.moe/asset/${id}`)
    const { asset, similarAssets } = await res.json()
    return { asset, similarAssets }
}

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata,
): Promise<Metadata> {
    const { id } = params
    const { asset, similarAssets } = await getAsset(id)

    return {
        title: `${asset.name} - wanderer.moe`,
        description: `Information about ${asset.name}`,
    }
}

async function Page({ params: { id } }: { params: { id: string } }) {
    const { asset, similarAssets } = await getAsset(id)

    return <></>
}

export default Page
