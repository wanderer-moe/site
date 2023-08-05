import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { mapAssetType } from '@/lib/helpers/casing/mapping'
import { FolderPlus, X } from 'lucide-react'
import { useCallback } from 'react'

interface CategoryFilterProps {
    categories: string[]
    selectedCategories: string[]
    onCategoryChange: (name: string) => void
}

export function CategoryFilter({
    categories,
    selectedCategories,
    onCategoryChange,
}: CategoryFilterProps) {
    const handleClear = useCallback(() => {
        selectedCategories.forEach((category) => onCategoryChange(category))
    }, [selectedCategories, onCategoryChange])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    Asset Categories
                    {selectedCategories?.length > 0 && (
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
                                            className="block rounded-sm font-normal"
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
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
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
                                        onSelect={handleClear}
                                        className="my-2 transition-colors hover:cursor-pointer">
                                        <X className="mr-2 h-4 w-4" />
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
