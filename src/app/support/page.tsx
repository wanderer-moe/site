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
import { HomeIcon, Heart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { SupportGrid } from "~/components/support/support-grid";

export const metadata: Metadata = {
    title: "Support Us • wanderer.moe",
    description: "Help us keep wanderer.moe running and improving",
};

export default function Support() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    <HomeIcon size={16} />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Support Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="Support Us"
                    title="Support wanderer.moe"
                    description="Help us keep the site running and improving"
                />
                <SupportGrid />
                <div className="flex text-muted-foreground flex-col gap-6">
                    <p>
                        You're one of over 400,000 people who use wanderer.moe
                        each month. We're committed to providing a free,
                        non-intrusive experience, but this comes at a
                        significant cost.
                    </p>
                    <p>
                        We need support to cover our hosting expenses, invest in
                        powerful hardware for datamining, ensure legal
                        compliance, and secure the future of wanderer.moe.
                    </p>
                    <p>
                        If you use wanderer.moe regularly & would like to
                        support, please consider supporting by donating,
                        following socials, or sharing the link with others :)
                    </p>
                </div>
            </div>
        </main>
    );
}
