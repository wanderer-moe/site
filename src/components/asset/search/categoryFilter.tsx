import { useState } from 'react'
import { SearchParams, Games } from '@/interfaces/params'
import { Input } from '@/components/ui/input'

interface CategoryFilterProps {
    games: Games[]
}

export function CategoryFilter({ games }: CategoryFilterProps) {
    const categories = [
        ...new Set(games.flatMap((game) => game.assetCategories)),
    ]
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category),
            )
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    return (
        <div className="flex flex-row">
            {categories.map((category) => (
                <div key={category} className="text-xs">
                    <Input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                    <label className="ml-2">{category}</label>
                </div>
            ))}
        </div>
    )
}
