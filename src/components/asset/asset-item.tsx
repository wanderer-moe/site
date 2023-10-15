/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Dialog } from '@/components/ui/dialog'
import { Asset } from '@/interfaces/asset/asset'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { mapAssetType } from '@/lib/helpers/casing/mapping'
import { timeAgo } from '@/lib/helpers/time'
import {
    Copy,
    Download,
    ExternalLink,
    HardDriveDownload,
    MoreHorizontal,
} from 'lucide-react'
import Link from 'next/link'
import { copyImageToClipboard as copyToClipboard } from 'copy-image-clipboard'
import { AddToCollection } from '../collection/add-to-collection'
import { siteConfig } from '@/config/site'

export function copyImageToClipboard(asset: Asset) {
    // TODO: add toasts to alert user of success/failure - this does not work on firefox
    copyToClipboard(`${siteConfig.urls.cdn}/assets/${asset.url}`)
        .then(() => console.log('Copied to clipboard'))
        .catch((err) => console.log('Failed to copy to clipboard', err))
}

function download(asset: Asset) {
    window.open(`${siteConfig.urls.api}/asset/download/${asset.id}`)
}

export function AssetItem(asset: Asset) {
    const assetName = asset.name.split('.').shift()
    // const assetFormat = asset.name.split('.').pop()
    return (
        <Dialog>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Card className="h-32 p-2 transition-all hover:border-foreground/50">
                        <div className="flex h-full items-center justify-between">
                            <div className="flex items-center">
                                <div className="mr-4 flex-shrink-0 justify-center rounded-lg bg-muted/20 p-1">
                                    <Link href={`/asset/${asset.id}`}>
                                        <img
                                            src={`${
                                                siteConfig.urls.cdn
                                            }/assets/${asset.url.replace(
                                                '.png',
                                                '-128.png',
                                            )}`}
                                            className="max-w-24 h-24 max-h-24 w-24 object-contain object-left"
                                            alt={asset.name}
                                        />
                                    </Link>
                                </div>
                                <div className="mr-2">
                                    <div>
                                        <p className="line-clamp-1 font-normal">
                                            {assetName}
                                        </p>
                                        <p className="line-clamp-1 text-xs font-normal">
                                            Size:{' '}
                                            {bytesToFileSize(asset.file_size)}
                                        </p>
                                    </div>
                                    <p className="line-clamp-1 text-xs font-normal">
                                        Uploaded {timeAgo(asset.uploaded_date)}
                                    </p>
                                    <div className="mt-2 flex flex-row gap-1">
                                        <Link
                                            href={`/search?game=${asset.game}&asset=${asset.asset_category}`}>
                                            <Button
                                                variant="outline"
                                                className="h-6 rounded-md px-3 py-1 text-xs font-normal">
                                                <div className="flex flex-row items-center">
                                                    <img
                                                        src={`${siteConfig.urls.cdn}/assets/${asset.game}/icon.png`}
                                                        className="mr-2 h-4 w-4"
                                                        alt={asset.game}
                                                    />
                                                    <div className="line-clamp-1 font-normal">
                                                        {mapAssetType(
                                                            asset.asset_category,
                                                        )}
                                                    </div>
                                                </div>
                                            </Button>
                                        </Link>
                                        {/* <Button
                                        variant="outline"
                                        size="cs"
                                        className="text-xs font-normal">
                                        <div className="flex flex-row items-center">
                                            <p className="font-normal uppercase">
                                                {assetFormat}
                                            </p>
                                        </div>
                                    </Button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                {/* TODO: open context menu on click */}
                                <Button
                                    title="More"
                                    variant="secondary"
                                    className="h-12 rounded-md px-3 text-xs">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                                {/* <Link href={`/asset/${asset.id}`}>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            title="View Asset"
                                            className="text-sm">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </Link> */}
                                <Button
                                    variant="secondary"
                                    title="Download Asset"
                                    className="h-12 rounded-md px-3 text-xs"
                                    onClick={() => download(asset)}>
                                    <HardDriveDownload className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </ContextMenuTrigger>
                <ContextMenuContent className="z-50 w-64">
                    <ContextMenuItem
                        onClick={() => copyImageToClipboard(asset)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Image
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => download(asset)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </ContextMenuItem>
                    {/* <ContextMenuItem>
                        <Star className="mr-2 h-4 w-4" />
                        Add to Favourites
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <DialogTrigger asChild>
                        <ContextMenuItem>
                            <ContainerIcon className="mr-2 h-4 w-4" />
                            Add to Collection
                        </ContextMenuItem>
                    </DialogTrigger> */}
                </ContextMenuContent>
            </ContextMenu>
            <AddToCollection {...asset} />
        </Dialog>
    )
}

export default AssetItem
