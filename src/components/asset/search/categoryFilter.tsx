import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { SearchParams, Games } from '@/interfaces/params'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Folder, FolderPlus, FolderCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    CommandEmpty,
    CommandInput,
    CommandItem,
    Command,
    CommandGroup,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { mapAssetType } from '@/lib/helpers/casing/mapping'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
    categories: string[]
    selectedCategories: string[]
    onCategoryChange: (name: string) => void
    clearSelectedCategories: () => void
}

export function CategoryFilter({
    categories,
    selectedCategories,
    onCategoryChange,
    clearSelectedCategories,
}: CategoryFilterProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    Asset Categories
                    {selectedCategories?.length > 0 ? (
                        <>
                            <Separator
                                orientation="vertical"
                                className="mx-2 h-4"
                            />
                            {selectedCategories.length < 2 ? (
                                <>
                                    {selectedCategories.map((c) => (
                                        <Badge
                                            variant="secondary"
                                            className="rounded-sm font-normal"
                                            key={c}>
                                            {mapAssetType(c)}
                                        </Badge>
                                    ))}
                                </>
                            ) : (
                                <Badge
                                    variant="secondary"
                                    className="rounded-sm font-normal">
                                    {selectedCategories.length} selected
                                </Badge>
                            )}
                        </>
                    ) : null}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
                <Command>
                    <CommandInput placeholder="Search for categories" />
                    <CommandList>
                        <CommandEmpty>No categories found</CommandEmpty>
                        <CommandGroup>
                            {categories.map((c) => {
                                const isSelected =
                                    selectedCategories.includes(c)
                                return (
                                    <CommandItem
                                        key={c}
                                        onSelect={() => onCategoryChange(c)}
                                        className={`my-2 transition-colors hover:cursor-pointer ${
                                            isSelected ? 'bg-zinc-800' : ''
                                        }`}>
                                        <span>{mapAssetType(c)}</span>
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                        {selectedCategories.length > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() =>
                                            clearSelectedCategories()
                                        }
                                        className="my-2 transition-colors hover:cursor-pointer">
                                        <span>Clear Filtered Categories</span>
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
