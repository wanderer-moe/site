import AssetContainer from '@/components/asset/assetsContainer'
import SkeletonLoader from '@/components/placeholders/skeletonLoader'
import { Asset, SimilarAsset } from '@/interfaces/asset'
import { mapAssetType, mapGame } from '@/lib/helpers/casing/mapping'
import { Metadata } from 'next'
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
    const { asset } = await getAsset(id)

    if (!asset) return notFound()

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
    const assetName = asset.name.split('.').shift()
    // const assetFormat = asset.name.split('.').pop()

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            {asset ? (
                <>
                    <div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-xl font-bold">{assetName}</h1>
                            <p className="text-xl">id {asset.id}</p>
                            <p className="text-xl">
                                {mapAssetType(asset.asset_category)}
                            </p>
                            <p className="text-xl">{mapGame(asset.game)}</p>
                            <p className="text-xl">{asset.uploaded_date}</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold">Similar Assets</h1>
                        <AssetContainer
                            assets={similarAssets}
                            displayCounter={false}
                        />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <SkeletonLoader />
                </div>
            )}
        </main>
    )
}

export default AssetPage
