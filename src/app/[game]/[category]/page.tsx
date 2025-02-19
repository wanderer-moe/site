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
    params: Promise<{ game: string; category: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { game, category } = params;
    const { response } = await getGameCategory(game, category);

    if (!response?.game) return notFound();

    return {
        title: `${FormatGameName(response.game)} ${FormatCategoryName(response.asset)} • wanderer.moe`,
        description: `Current ${FormatCategoryName(response.asset)} assets for ${FormatGameName(response.game)} available on wanderer.moe`,
    };
}

export default async function GameCategoryPage(props: Readonly<Props>) {
    const params = await props.params;
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
                            <div className="flex flex-col">
                                <AlertDescription className="text-muted-foreground flex flex-col">
                                    <p>
                                        Toggle between view and multi-select
                                        mode from the Mode button. Tap or click
                                        on an asset to view/select.
                                    </p>
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
