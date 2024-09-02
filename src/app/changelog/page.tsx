import { Metadata } from "next";
import { DescriptionImage } from "~/components/desc-image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { ChangelogHandler } from "~/components/changelog/changelog-handler";
export const metadata: Metadata = {
    title: "Changelog • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function ChangelogPage() {
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
                                <BreadcrumbPage>Changelog</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="Wuthering Waves Cover"
                    title="Changelog"
                    description="List of changes from the changelog channel on Discord."
                />
                <ChangelogHandler />
            </div>
        </main>
    );
}
