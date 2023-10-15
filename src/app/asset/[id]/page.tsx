/* eslint-disable @next/next/no-img-element */
import AssetContainer from '@/components/asset/assets-container'
import { SkeletonLoader } from '@/components/placeholders/skeleton-loader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@/components/ui/table'
import { Asset, SimilarAsset } from '@/interfaces/asset/asset'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { mapAssetType, mapGame } from '@/lib/helpers/casing/mapping'
import {
    Boxes,
    ChevronRightCircle,
    ChevronRight,
    Copy,
    Download,
    Image as ImageIcon,
    Info,
    Home,
} from 'lucide-react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'

async function getAsset(
    id: string,
): Promise<{ asset: Asset; similarAssets: SimilarAsset[] }> {
    const res = await fetch(`${siteConfig.urls.api}/asset/${id}`)
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
    if (!asset) return notFound()

    const assetName = asset.name.split('.').shift()
    const assetFormat = asset.name.split('.').pop()

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            {asset ? (
                <>
                    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                        <div className="whitespace-nowrap transition-colors hover:text-foreground">
                            <Link href={`/`}>
                                <Home size={16} />
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="whitespace-nowrap transition-colors hover:text-foreground">
                            <Link href={`/search?game=${asset.game}`}>
                                {mapGame(asset.game)}
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="whitespace-nowrap font-medium text-muted-foreground hover:text-foreground">
                            <Link
                                href={`/search?game=${asset.game}&asset=${asset.asset_category}`}>
                                {mapAssetType(asset.asset_category)}
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground transition-colors">
                            {assetName}.{assetFormat}
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="relative items-center justify-center rounded-xl border bg-secondary-dark">
                            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                <ImageIcon size={16} /> Asset
                            </h1>
                            <div className="flex h-[425px] items-center justify-center p-4">
                                <img
                                    src={`${siteConfig.urls.cdn}/assets/${asset.url}`}
                                    alt={assetName}
                                    className="checkerboard max-h-full rounded-lg border object-contain object-left shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="overflow-y-auto rounded-xl border bg-secondary-dark">
                            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                <Info size={16} /> Asset Information
                            </h1>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableCell colSpan={3}>
                                            {assetName}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Game</TableHead>
                                        <TableCell colSpan={3}>
                                            <div className="flex items-center">
                                                <img
                                                    src={`${siteConfig.urls.cdn}/assets/${asset.game}/icon.png`}
                                                    className="mr-2 h-4 w-4 rounded"
                                                    alt={asset.game}
                                                />
                                                {mapGame(asset.game)}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Asset Category</TableHead>
                                        <TableCell colSpan={3}>
                                            {mapAssetType(asset.asset_category)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Tags</TableHead>
                                        <TableCell colSpan={3}>
                                            {asset.tags
                                                .split(',')
                                                .map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Status</TableHead>
                                        <TableCell colSpan={3}>
                                            {/* TODO: Add semantic colors here */}
                                            <Badge variant="outline">
                                                {asset.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Uploaded By</TableHead>
                                        <TableCell colSpan={3}>
                                            {asset.uploaded_by}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Uploaded Date</TableHead>
                                        <TableCell>
                                            {new Date(
                                                asset.uploaded_date,
                                            ).toLocaleString()}
                                        </TableCell>
                                        <TableHead className="hidden sm:table-cell">
                                            File Size
                                        </TableHead>
                                        <TableCell className="hidden sm:table-cell">
                                            {bytesToFileSize(asset.file_size)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-0">
                                        <TableHead className="hidden sm:table-cell">
                                            Resolution
                                        </TableHead>
                                        <TableCell className="hidden sm:table-cell">
                                            {asset.width}x{asset.height}
                                        </TableCell>
                                        <TableHead className="hidden sm:table-cell">
                                            File Type
                                        </TableHead>
                                        <TableCell className="hidden uppercase sm:table-cell">
                                            {assetFormat}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>File Size</TableHead>
                                        <TableCell>
                                            {bytesToFileSize(asset.file_size)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>Resolution</TableHead>
                                        <TableCell>
                                            {asset.width}x{asset.height}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>File Type</TableHead>
                                        <TableCell className="uppercase">
                                            {assetFormat}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
                        {/* TODO: Implement */}
                        <Button
                            onClick={() =>
                                window.open(
                                    `${siteConfig.urls.api}/asset/download/${asset.id}`,
                                    '_blank',
                                )
                            }
                            className="w-full"
                            variant="outline"
                            title="Download Image">
                            <Download size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            title="Copy Image">
                            <Copy size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            title="Add to Collection">
                            <Boxes size={16} />
                        </Button>
                    </div>
                    {similarAssets.length > 0 && (
                        <>
                            <div className="mt-4 rounded-xl border bg-secondary-dark">
                                <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                    <ChevronRightCircle size={16} /> Similar
                                    Assets
                                </h1>
                                <div className="p-4">
                                    <AssetContainer
                                        assets={similarAssets}
                                        displayCounter={false}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <SkeletonLoader />
                </div>
            )}
        </div>
    )
}

export default AssetPage
