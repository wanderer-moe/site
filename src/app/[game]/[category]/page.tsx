import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormatCategoryName, FormatGameName } from "~/lib/format";
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
import { AssetHandler } from "~/components/category/asset-handler";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { getGameCategory } from "~/lib/api/client";
import { advisoryGames } from "~/lib/advisory-games";

export const runtime = "edge";

type Props = {
    params: { game: string; category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { game, category } = params;
    const { response } = await getGameCategory(game, category);

    if (!response?.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} ${FormatCategoryName(response.asset)} • wanderer.moe`,
        description: `${FormatGameName(response.game)} ${FormatCategoryName(response.asset)} assets on wanderer.moe`,
    };
}

export default async function GameCategoryPage({ params }: Readonly<Props>) {
    const log = new Logger();
    const { game, category } = params;
    log.info("Fetching game category data", { game: game, category: category });
    const { response } = await getGameCategory(game, category);

    if (!response?.game) {
        log.warn("Game category not found", { game: game, category: category });
        log.flush();
        return notFound();
    }

    log.info("Rendering game category page", {
        game: game,
        category: category,
    });
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
                                <BreadcrumbLink href={`/${game}`}>
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
                    url={`https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/${response.game}/cover.png`}
                    alt={response.game}
                    title={`${FormatGameName(response.game)} ${FormatCategoryName(response.asset)}`}
                    description={`Last updated ${timeAgo(response.lastUploaded.uploaded)}`}
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
                                        users may find disturbing. Recommended
                                        for audiences aged 16 and older.
                                    </AlertDescription>
                                </div>
                            </div>
                        </Alert>
                    </div>
                )}
                <div>
                    <Alert>
                        <div className="flex flex-row items-center gap-2 p-1">
                            <img
                                src="https://cdn.wanderer.moe/cdn-cgi/image/width=64,height=64,quality=75/wuthering-waves/emotes/T_ChatEmo_C_01.png"
                                alt="ww emote"
                                className="w-8 h-8"
                            />
                            <div className="flex flex-col">
                                <AlertDescription className="text-muted-foreground">
                                    Please use the designated download buttons
                                    to download assets, or the quality of the
                                    assets may be affected.
                                </AlertDescription>
                            </div>
                        </div>
                    </Alert>
                </div>
                <AssetHandler
                    assets={response.images}
                    game={response.game}
                    category={response.asset}
                />
            </div>
        </main>
    );
}
