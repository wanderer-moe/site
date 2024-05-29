"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FormatCategoryName } from "~/lib/format";
import { GameRoute } from "~/lib/types";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { timeAgo } from "~/lib/time";
import { Folders } from "lucide-react";

interface GamesCategoriesProps {
    categories: GameRoute["locations"];
}

export function GamesCategories({ categories }: GamesCategoriesProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, i) => (
                <CategoryEntry key={category.name + i} category={category} />
            ))}
        </div>
    );
}

function CategoryEntry({ category }: { category: GameRoute["locations"][0] }) {
    const pathname = usePathname();
    return (
        <Link href={`${pathname}/${category.name}`}>
            <Card className="group p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                {/* <Folders size={16} className="text-primary" /> */}
                <div className="flex flex-row items-center gap-1">
                    <h2 className="text-lg font-semibold">
                        {FormatCategoryName(category.name)}
                    </h2>
                </div>
                <div className="flex text-xs justify-between items-center gap-2">
                    <div className="flex flex-col">
                        <p className="text-muted-foreground">
                            Updated {timeAgo(category.lastUploaded)}
                        </p>
                    </div>
                    <p>{category.fileCount} files</p>
                </div>
            </Card>
        </Link>
    );
}
