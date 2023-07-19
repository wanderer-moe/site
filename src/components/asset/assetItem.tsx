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
import { HardDriveDownload, ExternalLink } from 'lucide-react'
import { bytesToFileSize } from '@/lib/helpers/asset/bytesToFileSize'
import { timeAgo } from '@/lib/helpers/time'

export default function AssetItem(asset: Asset) {
    return (
        <div>
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
                            <Link
                                href={`https://v2-api-testing.wanderer.moe/download/${asset.id}`}>
                                <Button size="sm" className="mt-2 text-sm">
                                    <HardDriveDownload className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </Link>
                            <Link href={`/asset/${asset.id}`}>
                                <Button size="sm" className="mt-2 text-sm">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
