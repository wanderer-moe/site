'use client'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import { siteConfig } from '@/config/site'
import { Clipboard } from 'lucide-react'

type CopyJSONDataProps = {
    data: {
        options: {
            name: string
            entries: string[]
        }[]
    }
}

export function CopyJSONData(props: CopyJSONDataProps): React.ReactElement {
    const { data } = props
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const copyDataToClipboard = (): void => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 4))
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <p className="mt-6 text-primary">
                    Want to use our OC Generator data in your own project?
                </p>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>JSON Data</DialogTitle>
                    <DialogDescription>
                        Copy the raw JSON data used by this generator to your
                        clipboard. This can be used in your own projects.
                        <p className="mt-2">
                            We also have a{' '}
                            <Link
                                className="text-primary"
                                href={`${siteConfig.urls.api}`}>
                                publically available API
                            </Link>{' '}
                            that you can use to fetch this data. Please credit
                            us if you use our data in your own project.
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                    <ScrollArea className="relative h-96 rounded-lg bg-secondary/25 p-2">
                        <Button
                            className="absolute right-2 top-2"
                            onClick={() => {
                                copyDataToClipboard()
                                console.log('copied')
                            }}
                            variant="outline">
                            <Clipboard size={16} />
                        </Button>
                        <pre className="text-sm text-white">
                            {JSON.stringify(data, null, 4)}
                        </pre>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}
