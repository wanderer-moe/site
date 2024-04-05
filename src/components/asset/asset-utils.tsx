'use client'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Copy, Download } from 'lucide-react'
import { useToast } from '../ui/use-toast'
import { copyImageToClipboard as copyToClipboard } from 'copy-image-clipboard'

export function DownloadAsset({ assetId }: { assetId: string }) {
    return (
        <Button
            onClick={() =>
                window.open(
                    `${siteConfig.urls.api}/v2/asset/${assetId}/download`,
                    '_blank',
                )
            }
            className="w-full"
            variant="secondary"
            title="Download Image">
            <Download size={16} />
        </Button>
    )
}

export function CopyAsset({ assetUrl }: { assetUrl: string }) {
    const { toast } = useToast()

    return (
        <Button
            onClick={() =>
                copyToClipboard(`${siteConfig.urls.cdn}${assetUrl}`)
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
            }
            className="w-full"
            variant="secondary"
            title="Copy Image">
            <Copy size={16} />
        </Button>
    )
}
