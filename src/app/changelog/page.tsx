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

export const metadata: Metadata = {
    title: "changelog // wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

type ChangelogEntry = {
    title: string;
    date: string;
    description: string;
};

const changes: ChangelogEntry[] = [
    {
        title: "Site Rewrite",
        date: "29th May 2024",
        description:
            "Following a DDOS attack, wanderer.moe has been rewrote into a new web framework, alongside a new design.",
    },
    {
        title: "Genshin 4.7 Preview Page",
        date: "25th May 2024",
        description:
            "Character Sheets from Genshin Impact's 4.7 Preview Page has been added. ",
    },
    {
        title: "Wuthering Waves",
        date: "22nd May 2024",
        description: "800+ Wuthering Waves Assets has been added to the site.",
    },
    {
        title: "Genshin Impact Emote Sync",
        date: "15th May 2024",
        description:
            "All missing Genshin Impact Emotes has been added to the site.",
    },
    {
        title: "Honkai Star Rail Sync",
        date: "7th May 2024",
        description:
            "All missing Honkai Star Rail Assets has been added to the site.",
    },
    {
        title: "Genshin Impact Asset Sync",
        date: "4th May 2024",
        description:
            "All missing Genshin Impact Character Sheets and Splash Art has been added to the site.",
    },
    {
        title: "Genshin Impact Asset Sync",
        date: "22nd April 2024",
        description:
            "All missing Genshin Impact Character Cards, Emotes and Sheets has been added to the site.",
    },
    {
        title: "Temporary Downtime",
        date: "14th March 2024",
        description:
            "wanderer.moe's storage bucket experienced a temporary outage, causing backend downtime for 30 minutes.",
    },
    {
        title: "Site Changes",
        date: "14th March 2024",
        description: "Minor changes to the site's design and layout.",
    },
    {
        title: "Genshin Impact Asset Sync",
        date: "12th March 2024",
        description: "Uploaded Arlecchino card & no background variant.",
    },
    {
        title: "Genshin Impact 4.5 Preview Page",
        date: "2nd March 2024",
        description:
            "Character Sheets from Genshin Impact's 4.5 Preview Page has been added.",
    },
    {
        title: "Honkai Star Rail Sync",
        date: "27th February 2024",
        description: "Uploaded and replaced over 400+ Honkai Star Rail Assets.",
    },
    {
        title: "Genshin Impact x Oneplus Emotes",
        date: "27th February 2024",
        description: "Uploaded all missing Genshin Impact x Oneplus Emotes.",
    },
    {
        title: "Genshin Impact Emote Sync",
        date: "22rd February 2024",
        description: "New Genshin Impact Emotes.",
    },
    {
        title: "Genshin Impact Emote Sync",
        date: "8th February 2024",
        description: "New Genshin Impact Emotes.",
    },
    {
        title: "Genshin Impact 4.4 Sync",
        date: "29th January 2024",
        description: "Uploaded new Genshin Impact 4.4 Assets.",
    },
    {
        title: "Genshin Impact 4.4 Preview Page",
        date: "20th January 2024",
        description:
            "Character Sheets from Genshin Impact's 4.4 Preview Page has been added.",
    },
    {
        title: "Emote Update",
        date: "13th January 2024",
        description:
            "Uploaded new emotes for Genshin Impact, Honkai Star Rail and Honkai Impact 3rd.",
    },
    {
        title: "Genshin Impact Asset Sync",
        date: "17th December 2023",
        description:
            "Missing Genshin Impact assets have been added to the site.",
    },
    {
        title: "Genshin 4.3 Preview Page",
        date: "9th December 2023",
        description:
            "Character Sheets from Genshin Impact's 4.3 Preview Page has been added.",
    },
    {
        title: "Genshin Impact Asset Sync",
        date: "23rd November 2023",
        description:
            "Added weapon icons & other missing Genshin Impact assets.",
    },
    {
        title: "Site Changes",
        date: "16th November 2023",
        description: "Minor changes to the site's design and layout.",
    },
    {
        title: "Genshin Impact 4.2 Preview Page",
        date: "6th November 2023",
        description:
            "Character Sheets from Genshin Impact's 4.2 Preview Page has been added.",
    },
    {
        title: "Reverse: 1999 Assets",
        date: "29th October 2023",
        description: "Uploaded Reverse: 1999 assets to the site.",
    },
    {
        title: "Genshin Impact 4.1 Assets",
        date: "29th September 2023",
        description:
            "Uploaded TCG Character Sheets & Splash Art from Genshin Impact 4.1.",
    },
    {
        title: "Genshin Impact 4.1 Preview Page",
        date: "16th September 2023",
        description:
            "Character Sheets from Genshin Impact's 4.1 Preview Page has been added.",
    },
    {
        title: "Honkai: Star Rail Preview Page",
        date: "20th August 2023",
        description:
            "Character Sheets from Honkai: Star Rail's Preview Page has been added.",
    },
    {
        title: "Genshin Impact 4.0 Assets",
        date: "14th August 2023",
        description: "Uploaded new Genshin Impact 4.0 assets.",
    },
];

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
                    url="https://cdn.wanderer.moe/wuthering-waves/cover.png"
                    alt="Wuthering Waves Cover"
                    title="Changelog"
                    description="Simplified list of changes made to the site."
                />
                {changes.map((change, index) => (
                    <div key={index}>
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">
                                    {change.title}
                                </h2>
                                <p className="text-xs invisible md:visible text-muted-foreground">
                                    {change.date}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {change.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
