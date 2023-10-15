'use client'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function DownloadAsset({ assetId }: { assetId: number }) {
    return (
        <Button
            onClick={() =>
                window.open(
                    `${siteConfig.urls.api}/asset/download/${assetId}`,
                    '_blank',
                )
            }
            className="w-full"
            variant="outline"
            title="Download Image">
            <Download size={16} />
        </Button>
    )
}
