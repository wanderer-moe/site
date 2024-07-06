import { Metadata } from "next";
import Link from "next/link";
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
import { ContributorsGrid } from "~/components/contributors/contributors-grid";

export const metadata: Metadata = {
    title: "Contributors • wanderer.moe",
    description:
        "A list of contributors who have helped make wanderer.moe possible.",
};

export default async function Contibutors() {
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
                                <BreadcrumbPage>Contributors</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="wuthering waves cover art"
                    title="Contributors"
                    description="A list of contributors who have helped make wanderer.moe possible."
                />
                <ContributorsGrid />
            </div>
        </main>
    );
}
