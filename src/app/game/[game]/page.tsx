import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GamesCategories } from "~/components/games/games-categories";
import { FormatGameName } from "~/lib/format";
import { GameRoute } from "~/lib/types";
import Image from "next/image";
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

async function getGame(game: string): Promise<{ response: GameRoute }> {
    const response = await fetch(`https://api.wanderer.moe/game/${game}`);
    const data = await response.json();
    return { response: data };
}

type Props = {
    params: { game: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { game } = params;
    const { response } = await getGame(game);

    if (!response || !response.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} Assets // wanderer.moe`,
        description: `Available assets for ${FormatGameName(response.game)} on wanderer.moe`,
    };
}

export default async function GamePage({ params }: Props) {
    const { game } = params;
    const { response } = await getGame(game);

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
                                <BreadcrumbPage>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Image
                                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/${response.game}/icon.png`}
                                            width={18}
                                            height={18}
                                            alt={response.game}
                                            className="rounded-md"
                                        />
                                        {FormatGameName(response.game)}
                                    </div>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url={`https://cdn.wanderer.moe/${response.game}/cover.png`}
                    alt={response.game}
                    title={FormatGameName(response.game)}
                    description={`Last updated ${timeAgo(response.lastUploaded)}`}
                />
                <GamesCategories categories={response.locations} />
            </div>
        </main>
    );
}
