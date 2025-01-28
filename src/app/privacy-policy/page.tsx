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

export const metadata: Metadata = {
    title: "Privacy Policy • wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function PrivacyPolicy() {
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
                                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <DescriptionImage
                    url="https://cdn.wanderer.moe/cdn-cgi/image/width=1500,height=1000,quality=75/wuthering-waves/cover.png"
                    alt="Privacy Policy"
                    title="Privacy Policy"
                    description="Last Updated 28th January 2025"
                />
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            Policy Summary
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            We don't collect or store any personally
                            identifiable data. We use GDPR-compliant analytics
                            and advertising services.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            What data does wanderer.moe collect?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Your IP address may be logged by Cloudflare for
                            security purposes. We also track what pages you
                            visit and basic visitor information. There is no way
                            for us to identify you based on what we collect,
                            unless you provide us with identifiable information.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            How do we use your data?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            The data is unidentifiable and is only used for
                            analytics and debugging purposes. We use seline.so
                            for our analytics, which helps us improve our
                            service while respecting your privacy.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Advertising</h2>
                        <p className="text-sm text-muted-foreground">
                            We may use Google AdSense to display advertisements
                            on our site. Google AdSense is fully compliant with
                            GDPR and other privacy regulations. For more
                            information on how Google uses data when you use our
                            site, please visit{" "}
                            <Link
                                href="https://policies.google.com/technologies/partner-sites"
                                className="text-primary hover:text-muted-foreground transition-all duration-150"
                            >
                                Google's Privacy & Terms page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Open Source</h2>
                        <p className="text-sm text-muted-foreground">
                            With compliance in being 100% transparent, all of
                            wanderer.moe&apos;s services are open-source and
                            available on{" "}
                            <Link
                                href="https://git.wanderer.moe"
                                className="text-primary hover:text-muted-foreground transition-all duration-150"
                            >
                                GitHub
                            </Link>
                            . You can read the source code for yourself.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            Who can I contact for privacy concerns?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Contact{" "}
                            <Link
                                href="mailto:support@originoid.co"
                                className="text-primary hover:text-muted-foreground transition-all duration-150"
                            >
                                support@originoid.co
                            </Link>{" "}
                            for any privacy concerns.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            Company Information
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            wanderer.moe is operated by{" "}
                            <strong>Originoid LTD</strong>, a private limited
                            company registered in England.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Company number:</strong> 15988228
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Registered office address:</strong> 124 City
                            Road, London, England, EC1V 2NX
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>ICO Registration Reference:</strong>{" "}
                            ZB857511
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
