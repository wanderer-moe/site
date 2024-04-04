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
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
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
import { DownloadAsset } from '@/components/asset/download-asset'
import { z } from 'zod'
import { APIClient } from '@/lib/api-client/client'
import type { get_V2assetId } from '@/lib/api-client/openapi'

export const runtime = 'edge'

async function getAsset(
    id: string,
): Promise<{ response: z.infer<get_V2assetId['response']> }> {
    const response = await APIClient.get(`/v2/asset/{id}`, {
        path: { id: id },
    })
    return { response }
}

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params
    const { response } = await getAsset(id)

    if (!response) return notFound()

    return {
        title: `${response.asset.name} - ${response.asset.game.formattedName} ${response.asset.assetCategory.formattedName}  - wanderer.moe`,
        description: `${response.asset.name} - ${response.asset.game.formattedName} ${response.asset.assetCategory.formattedName}.`,
    }
}

async function AssetPage({ params: { id } }: { params: { id: string } }) {
    const { response } = await getAsset(id)
    if (!response) return notFound()

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            {response ? (
                <>
                    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                        <div className="whitespace-nowrap transition-colors hover:text-foreground">
                            <Link href={`/`}>
                                <Home size={16} />
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="whitespace-nowrap transition-colors hover:text-foreground">
                            <Link
                                href={`/search?game=${response.asset.game.id}`}>
                                {response.asset.game.formattedName}
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="whitespace-nowrap font-medium text-muted-foreground hover:text-foreground">
                            <Link
                                href={`/search?game=${response.asset.game.id}&asset=${response.asset.assetCategory.id}`}>
                                {response.asset.assetCategory.formattedName}
                            </Link>
                        </div>
                        <ChevronRight size={16} />
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-foreground transition-colors">
                            {response.asset.name}.{response.asset.extension}
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="relative items-center justify-center rounded-xl border bg-secondary-dark">
                            <h1 className="flex items-center justify-center gap-2 rounded-t-xl border-b bg-background py-2 text-base">
                                <ImageIcon size={16} /> Asset
                            </h1>
                            <div className="flex h-[425px] items-center justify-center p-4">
                                <img
                                    src={`${siteConfig.urls.cdn}${response.asset.url}`}
                                    alt={response.asset.name}
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
                                            {response.asset.name}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Game</TableHead>
                                        <TableCell colSpan={3}>
                                            <div className="flex items-center">
                                                <img
                                                    src={`${siteConfig.urls.cdn}/game/${response.asset.game.id}/icon.png`}
                                                    className="mr-2 h-4 w-4 rounded"
                                                    alt={
                                                        response.asset.game
                                                            .formattedName
                                                    }
                                                />
                                                {
                                                    response.asset.game
                                                        .formattedName
                                                }
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Asset Category</TableHead>
                                        <TableCell colSpan={3}>
                                            {
                                                response.asset.assetCategory
                                                    .formattedName
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Tags</TableHead>
                                        <TableCell colSpan={3}>
                                            {response.asset.assetTagAsset.map(
                                                (tagAsset, index) => (
                                                    <Badge
                                                        variant={'outline'}
                                                        key={index}>
                                                        {
                                                            tagAsset.assetTag
                                                                .formattedName
                                                        }
                                                    </Badge>
                                                ),
                                            )}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Likes</TableHead>
                                        <TableCell colSpan={3}>
                                            {/* TODO: Add semantic colors here */}
                                            <Badge variant="outline">
                                                {response.assetLikes}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Uploaded By</TableHead>
                                        <TableCell colSpan={3}>
                                            {
                                                response.asset.authUser
                                                    .displayName
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Uploaded Date</TableHead>
                                        <TableCell>
                                            {new Date(
                                                response.asset.uploadedDate,
                                            ).toLocaleString()}
                                        </TableCell>
                                        <TableHead className="hidden sm:table-cell">
                                            File Size
                                        </TableHead>
                                        <TableCell className="hidden sm:table-cell">
                                            {bytesToFileSize(
                                                response.asset.fileSize,
                                            )}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-0">
                                        <TableHead className="hidden sm:table-cell">
                                            Resolution
                                        </TableHead>
                                        <TableCell className="hidden sm:table-cell">
                                            {response.asset.width}x
                                            {response.asset.height}
                                        </TableCell>
                                        <TableHead className="hidden sm:table-cell">
                                            File Type
                                        </TableHead>
                                        <TableCell className="hidden uppercase sm:table-cell">
                                            {response.asset.extension}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>File Size</TableHead>
                                        <TableCell>
                                            {bytesToFileSize(
                                                response.asset.fileSize,
                                            )}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>Resolution</TableHead>
                                        <TableCell>
                                            {response.asset.width}x
                                            {response.asset.height}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="sm:hidden">
                                        <TableHead>File Type</TableHead>
                                        <TableCell className="uppercase">
                                            {response.asset.extension}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
                        {/* TODO: Implement */}
                        <DownloadAsset assetId={response.asset.id} />
                        <Button
                            variant="secondary"
                            className="w-full"
                            title="Copy Image">
                            <Copy size={16} />
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-full"
                            title="Add to Collection">
                            <Boxes size={16} />
                        </Button>
                    </div>
                    {/* {similarAssets.length > 0 && (
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
                    )} */}
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
