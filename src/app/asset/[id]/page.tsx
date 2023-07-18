import { Metadata, ResolvingMetadata } from 'next'
import { Asset, SimilarAsset } from '@/interfaces/asset'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'
import { AssetItem } from '@/components/asset/assetitem'
import { notFound } from 'next/navigation'

async function getAsset(
    id: string,
): Promise<{ asset: Asset; similarAssets: SimilarAsset[] }> {
    const res = await fetch(`https://v2-api-testing.wanderer.moe/asset/${id}`)
    const { asset, similarAssets } = await res.json()
    return { asset, similarAssets }
}

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params
    const { asset, similarAssets } = await getAsset(id)

    if (!asset) {
        return notFound()
    }

    return {
        title: `${asset.name} (${mapGame(asset.game)}: ${mapAssetType(
            asset.asset_category,
        )}) - wanderer.moe`,
        description: `Information about ${asset.name} from ${mapGame(
            asset.game,
        )} - ${mapAssetType(asset.asset_category)}`,
    }
}

async function AssetPage({ params: { id } }: { params: { id: string } }) {
    const { asset, similarAssets } = await getAsset(id)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {asset ? (
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold">{asset.name}</h1>
                        <p className="text-xl">id {asset.id}</p>
                        <p className="text-xl">
                            {mapAssetType(asset.asset_category)}
                        </p>
                        <p className="text-xl">{mapGame(asset.game)}</p>
                        <p className="text-xl">{asset.uploaded_date}</p>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold">Similar Assets</h1>
                        {similarAssets.map((item: SimilarAsset) => (
                            <AssetItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </main>
    )
}

export default AssetPage
