"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { FormatCategoryName } from "~/lib/format";
import { GameRoute } from "~/lib/types";
import { Card } from "../ui/card";
import { timeAgo } from "~/lib/time";

interface GamesCategoriesProps {
    categories: GameRoute["locations"];
}

export function GamesCategories({
    categories,
}: Readonly<GamesCategoriesProps>) {
    const router = useRouter();

    React.useEffect(() => {
        router.refresh();
    }, [router]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
                <CategoryEntry key={category.name} category={category} />
            ))}
        </div>
    );
}

function CategoryEntry({
    category,
}: Readonly<{ category: GameRoute["locations"][0] }>) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = React.useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            const url = `${pathname}/${category.name}`;

            router.refresh();
            router.push(url);
        },
        [pathname, category.name, router],
    );

    return (
        <Link
            href={`${pathname}/${category.name}`}
            onClick={handleClick}
            className="block"
        >
            <Card className="group p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
                <div className="flex flex-row items-center gap-1">
                    <h2 className="text-lg font-semibold">
                        {FormatCategoryName(category.name)}
                    </h2>
                </div>
            </Card>
        </Link>
    );
}
