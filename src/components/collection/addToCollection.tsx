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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ContextMenuItem } from '@/components/ui/context-menu'
import { ContainerIcon, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Asset } from '@/interfaces/asset'
import { CreateCollection } from './createCollection'

export function AddToCollection(asset: Asset) {
    const [selected, setSelected] = useState<boolean>(false)

    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add To Collection</DialogTitle>
                <DialogDescription>
                    Add {asset.name} to a collection
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 pt-4"></div>
            <Separator />
            <DialogFooter className="flex gap-2">
                <Button className="w-full" variant="secondary">
                    <PlusCircle className="mr-2" size={16} />
                    Create New
                </Button>
                <Button className="w-full" disabled={selected}>
                    <PlusCircle className="mr-2" size={16} />
                    Add To Collection
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
