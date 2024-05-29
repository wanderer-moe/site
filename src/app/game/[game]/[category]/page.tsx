import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormatCategoryName, FormatGameName } from "~/lib/format";
import { CategoryRoute } from "~/lib/types";
// import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { DescriptionImage } from "~/components/desc-image";
import { timeAgo } from "~/lib/time";
import { HomeIcon } from "lucide-react";
import { AssetHandler } from "~/components/category/asset-handler";

async function getCategory(
    game: string,
    category: string,
): Promise<{ response: CategoryRoute }> {
    const response = await fetch(
        `https://api.wanderer.moe/game/${game}/${category}`,
    );
    const data = await response.json();
    return { response: data };
}

export const runtime = "edge";

type Props = {
    params: { game: string; category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { game, category } = params;
    const { response } = await getCategory(game, category);

    if (!response || !response.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} ${FormatCategoryName(response.asset)}  // wanderer.moe`,
        description: `${FormatCategoryName(response.asset)} ${FormatGameName(response.game)} on wanderer.moe`,
    };
}

export default async function GamePage({ params }: Props) {
    const { game, category } = params;
    const { response } = await getCategory(game, category);

    if (!response || !response.game) return notFound();

    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    <HomeIcon size={16}></HomeIcon>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/game/${game}`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        {/* <Image
                                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/${response.game}/icon.png`}
                                            width={18}
                                            height={18}
                                            alt={response.game}
                                            className="rounded-md"
                                        /> */}
                                        {FormatGameName(response.game)}
                                    </div>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    {FormatCategoryName(response.asset)}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url={`https://cdn.wanderer.moe/${response.game}/cover.png`}
                    alt={response.game}
                    title={`${FormatGameName(response.game)} ${FormatCategoryName(response.asset)}`}
                    description={`Last updated ${timeAgo(response.lastUploaded.uploaded)}`}
                />
                <AssetHandler
                    assets={response.images}
                    game={response.game}
                    category={response.asset}
                />
            </div>
        </main>
    );
}
