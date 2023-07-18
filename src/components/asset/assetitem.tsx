import Link from 'next/link'
import { Asset } from '@/interfaces/asset'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'

export function AssetItem(asset: Asset) {
    return (
        <div>
            <Link href={`/asset/${asset.id}`}>
                <p className="">
                    {asset.name} - {asset.id} -{' '}
                    {mapAssetType(asset.asset_category)} {mapGame(asset.game)}
                </p>
            </Link>
        </div>
    )
}
