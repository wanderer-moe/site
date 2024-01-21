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
    Router,
    Star,
} from 'lucide-react'
import Link from 'next/link'
import { copyImageToClipboard as copyToClipboard } from 'copy-image-clipboard'
import { siteConfig } from '@/config/site'
import { useToast } from '../ui/use-toast'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'

function download(asset: Asset) {
    window.open(`${siteConfig.urls.api}/asset/download/${asset.id}`)
}

export default function AssetItem(asset: Asset) {
    const assetName = asset.name.split('.').shift()
    // const assetFormat = asset.name.split('.').pop()
    const { toast } = useToast()

    return (
        <>
            <Card className="group h-32 p-2 transition-all hover:border-foreground/50">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center">
                        <div className="mr-4 flex-shrink-0 justify-center rounded-lg bg-muted/20 p-1">
                            <ContextMenu>
                                <ContextMenuTrigger>
                                    <Link href={`/asset/${asset.id}`}>
                                        <div className="relative">
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
                                            <ExternalLink className="absolute bottom-2 right-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </div>
                                    </Link>
                                </ContextMenuTrigger>
                                <ContextMenuContent className="z-50 w-64">
                                    <ContextMenuItem
                                        onClick={() =>
                                            copyToClipboard(
                                                `${siteConfig.urls.cdn}/assets/${asset.url}`,
                                            )
                                                .then(() =>
                                                    toast({
                                                        title: 'Copied image to clipboard',
                                                        description:
                                                            'Image copied to clipboard',
                                                    }),
                                                )
                                                .catch((err) =>
                                                    toast({
                                                        title: 'Failed to copy image to clipboard',
                                                        description:
                                                            "Your browser doesn't support this feature",
                                                        variant: 'destructive',
                                                    }),
                                                )
                                        }>
                                        <Copy className="mr-2 h-4 w-4" />
                                        Copy Image
                                    </ContextMenuItem>
                                    <ContextMenuItem
                                        onClick={() => download(asset)}>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download
                                    </ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        </div>
                        <div className="mr-2">
                            <div>
                                <p className="line-clamp-1 font-normal">
                                    {assetName}
                                </p>
                                <p className="line-clamp-1 text-xs font-normal">
                                    Size: {bytesToFileSize(asset.file_size)}
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
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <MoreOptions asset={asset} />
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
        </>
    )
}

function MoreOptions({ asset }: { asset: Asset }) {
    const { toast } = useToast()
    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    title="More"
                    variant="secondary"
                    className="h-12 rounded-md px-3 text-xs">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => download(asset)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        copyToClipboard(
                            `${siteConfig.urls.cdn}/assets/${asset.url}`,
                        )
                            .then(() =>
                                toast({
                                    title: 'Copied image to clipboard',
                                    description: 'Image copied to clipboard',
                                }),
                            )
                            .catch((err) =>
                                toast({
                                    title: 'Failed to copy image to clipboard',
                                    description:
                                        "Your browser doesn't support this feature",
                                    variant: 'destructive',
                                }),
                            )
                    }>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Image
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => router.push(`/asset/${asset.id}`)}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Asset Page
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Star className="mr-2 h-4 w-4" />
                    Favorite Asset
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
