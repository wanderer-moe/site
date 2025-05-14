"use client";

import { useAppSelector } from "~/redux/store";
import { AssetHandler } from "~/components/category/asset-handler";
import { DescriptionImage } from "~/components/desc-image";
import { HomeIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import Link from "next/link";
import { FormatGameName, FormatCategoryName } from "~/lib/format";

export function SavedAssetsContent() {
    const savedAssets = useAppSelector(
        (state) => state.savedAssets.savedAssets,
    );

    const groupedAssets = savedAssets.reduce(
        (acc, asset) => {
            const [, , , game, category] = asset.path.split("/");
            const key = `${game}/${category}`;
            if (!acc[key]) {
                acc[key] = {
                    game,
                    category,
                    assets: [],
                };
            }
            acc[key].assets.push(asset);
            return acc;
        },
        {} as Record<
            string,
            { game: string; category: string; assets: typeof savedAssets }
        >,
    );

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link
                                    prefetch={false}
                                    className="transition-colors hover:text-foreground"
                                    href="/"
                                >
                                    <HomeIcon size={16}></HomeIcon>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Saved Assets</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/genshin-impact/cover.png"
                    alt="Saved Assets"
                    title="Saved Assets"
                    description={`${savedAssets.length} saved assets`}
                />
                {Object.entries(groupedAssets).map(
                    ([key, { game, category, assets }]) => (
                        <div key={key} className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">
                                {FormatGameName(game)}{" "}
                                {FormatCategoryName(category)}
                            </h2>
                            <AssetHandler
                                assets={assets}
                                game={game}
                                category={category}
                            />
                        </div>
                    ),
                )}
            </div>
        </main>
    );
}
