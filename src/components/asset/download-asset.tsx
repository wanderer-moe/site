'use client'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

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
