/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { Asset } from '@/interfaces/asset'
import { mapGame, mapAssetType } from '@/lib/helpers/casing/mapping'
import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    HardDriveDownload,
    ExternalLink,
    Star,
    ContainerIcon,
    Copy,
    Download,
    PlusCircleIcon,
} from 'lucide-react'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { timeAgo } from '@/lib/helpers/time'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { AddToCollection } from '../collection/addToCollection'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

function copyImageToClipboard(asset: Asset) {
    const i = new Image()
    i.src = `https://cdn.wanderer.moe/${asset.url}`
    // TODO: Copy image to clipboard..
}

function download(asset: Asset) {
    window.open(`https://v2-api-testing.wanderer.moe/download/${asset.id}`)
}

export function AssetItem(asset: Asset) {
    return (
        <Dialog>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Card className="p-2 transition-all hover:cursor-pointer hover:bg-zinc-400/5">
                        <div className="relative flex items-center">
                            <div className="mr-4 flex-shrink-0 justify-center rounded-lg bg-zinc-800/20 p-1">
                                <img
                                    src={`https://cdn.wanderer.moe/${asset.url}`}
                                    className="max-w-32 h-32 max-h-32 w-32 object-contain object-left"
                                    alt={asset.name}
                                />
                            </div>
                            <div>
                                <div className="flex flex-row gap-1">
                                    <Link href={`/search?game=${asset.game}`}>
                                        <Button
                                            variant="outline"
                                            size="cs"
                                            className="text-xs font-normal">
                                            <img
                                                src={`https://cdn.wanderer.moe/${asset.game}/icon.png`}
                                                className="h-4 w-4"
                                                alt={asset.game}
                                            />
                                        </Button>
                                    </Link>
                                    <Link
                                        href={`/search?asset=${asset.asset_category}`}>
                                        <Button
                                            variant="outline"
                                            size="cs"
                                            className="text-xs font-normal">
                                            {mapAssetType(asset.asset_category)}
                                        </Button>
                                    </Link>
                                </div>
                                <p className="font-normal">{asset.name}</p>
                                <p className="text-xs font-normal">
                                    Size: {bytesToFileSize(asset.file_size)}
                                </p>
                                <p className="text-xs font-normal">
                                    Uploaded {timeAgo(asset.uploaded_date)}
                                </p>
                                <div className="flex flex-row gap-2">
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="mt-2 text-sm"
                                        onClick={() => download(asset)}>
                                        <HardDriveDownload className="h-4 w-4" />
                                    </Button>
                                    <Link href={`/asset/${asset.id}`}>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="mt-2 text-sm">
                                            <ExternalLink className="h-4 w-4" />
                                        </Button>
                                    </Link>
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
                    <ContextMenuItem>
                        <Star className="mr-2 h-4 w-4" />
                        Add to Favourites
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <DialogTrigger asChild>
                        <ContextMenuItem>
                            <ContainerIcon className="mr-2 h-4 w-4" />
                            Add to Collection
                        </ContextMenuItem>
                    </DialogTrigger>
                </ContextMenuContent>
            </ContextMenu>
            <AddToCollection {...asset} />
        </Dialog>
    )
}

export default AssetItem
