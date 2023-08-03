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
import { Asset } from '@/interfaces/asset'
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
import { AddToCollection } from '../collection/addToCollection'

function copyImageToClipboard(asset: Asset) {
    const i = new Image()
    i.src = `https://files.wanderer.moe/assets/${asset.url}`
    // TODO: Copy image to clipboard..
}

function download(asset: Asset) {
    window.open(`https://v2-api-testing.wanderer.moe/download/${asset.id}`)
}

export function AssetItem(asset: Asset) {
    const assetName = asset.name.split('.').shift()
    const assetFormat = asset.name.split('.').pop()
    return (
        <Dialog>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Card className="p-2 transition-all hover:cursor-pointer hover:border-white/50">
                        <div className="relative flex items-center">
                            <div className="absolute bottom-0 right-0">
                                <div className="flex flex-col justify-center gap-1">
                                    {/* TODO: open context menu on click */}
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        className="text-sm">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                    <Link href={`/asset/${asset.id}`}>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="text-sm">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        className="text-sm"
                                        onClick={() => download(asset)}>
                                        <HardDriveDownload className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="mr-4 flex-shrink-0 justify-center rounded-lg bg-zinc-800/20 p-1">
                                <img
                                    src={`https://files.wanderer.moe/assets/${asset.url}`}
                                    className="max-w-24 h-24 max-h-24 w-24 object-contain object-left"
                                    alt={asset.name}
                                />
                            </div>
                            <div>
                                <div>
                                    <p className="font-normal">{assetName}</p>
                                    <p className="text-xs font-normal">
                                        Size: {bytesToFileSize(asset.file_size)}
                                    </p>
                                </div>
                                <p className="text-xs font-normal">
                                    Uploaded {timeAgo(asset.uploaded_date)}
                                </p>
                                <div className="mt-2 flex flex-row gap-1">
                                    <Link
                                        href={`/search?game=${asset.game}&asset=${asset.asset_category}`}>
                                        <Button
                                            variant="outline"
                                            size="cs"
                                            className="text-xs font-normal">
                                            <div className="flex flex-row items-center">
                                                <img
                                                    src={`https://files.wanderer.moe/assets/${asset.game}/icon.png`}
                                                    className="mr-2 h-4 w-4"
                                                    alt={asset.game}
                                                />
                                                <p className="font-normal">
                                                    {mapAssetType(
                                                        asset.asset_category,
                                                    )}
                                                </p>
                                            </div>
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        size="cs"
                                        className="text-xs font-normal">
                                        <div className="flex flex-row items-center">
                                            <p className="font-normal uppercase">
                                                {assetFormat}
                                            </p>
                                        </div>
                                    </Button>
                                </div>
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
