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
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { advisoryGames } from "~/lib/advisory-games";
import Link from "next/link";

export const runtime = "edge";

export const revalidate = 0;

type Props = {
    params: Promise<{ game: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { game } = params;
    const { response } = await getGame(game);

    if (!response?.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} Assets • wanderer.moe`,
        description: `Available assets for ${FormatGameName(response.game)} on wanderer.moe`,
    };
}

export default async function GamePage(props: Readonly<Props>) {
    const params = await props.params;
    const log = new Logger();
    const { game } = params;

    try {
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
            <main
                className="mx-auto min-h-screen max-w-screen-xl p-5"
                key={game}
            >
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
                    />
                    {advisoryGames.includes(response.game) && (
                        <div>
                            <Alert>
                                <div className="flex flex-row items-center gap-2 p-1">
                                    <div className="flex flex-col">
                                        <AlertTitle className="text-destructive">
                                            Sensitive Content Warning
                                        </AlertTitle>
                                        <AlertDescription className="text-muted-foreground">
                                            This game contains content that some
                                            users may find disturbing.
                                            Recommended for audiences aged 16
                                            and older.
                                        </AlertDescription>
                                    </div>
                                </div>
                            </Alert>
                        </div>
                    )}
                    <GamesCategories categories={response.locations} />
                </div>
            </main>
        );
    } catch (error) {
        log.error("Error loading game page", {
            game: game,
            error: error instanceof Error ? error.message : String(error),
        });
        log.flush();
        throw error;
    }
}
