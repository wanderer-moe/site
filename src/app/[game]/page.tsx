import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GamesCategories } from "~/components/games/games-categories";
import { FormatGameName } from "~/lib/format";
import { Logger } from "next-axiom";

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
import { getGame } from "~/lib/api/client";

export const runtime = "edge";

type Props = {
    params: { game: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { game } = params;
    const { response } = await getGame(game);

    if (!response?.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} Assets • wanderer.moe`,
        description: `Available assets for ${FormatGameName(response.game)} on wanderer.moe`,
    };
}

export default async function GamePage({ params }: Readonly<Props>) {
    const log = new Logger();
    const { game } = params;
    log.info("Fetching game data", { game: game });
    const { response } = await getGame(game);

    if (!response?.game) {
        log.warn("Game not found", { game: game });
        log.flush();
        return notFound();
    }

    log.info("Rendering game page", { game: game });
    log.flush();

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
                                        {/* <Image
                                            src={`https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/${response.game}/icon.png`}
                                            width={18}
                                            height={18}
                                            alt={response.game}
                                            className="rounded-md"
                                        /> */}
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
