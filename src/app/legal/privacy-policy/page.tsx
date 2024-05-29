import { Metadata } from "next";
import Link from "next/link";
import { DescriptionImage } from "~/components/desc-image";

export const metadata: Metadata = {
    title: "privacy policy // wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export default function Home() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-6">
                <DescriptionImage
                    url="https://cdn.wanderer.moe/wuthering-waves/cover.png"
                    alt="Privacy Policy"
                    title="Privacy Policy"
                    description="Last Updated 29th May 2024"
                />
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            Policy Summary
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            We dont collect or store any personally identifiable
                            data.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">
                            What data does wanderer.moe collect?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Since June 8th, 2023 we collect basic anonymized
                            data. Your IP address may be logged by Cloudflare
                            for security purposes. There is no way for others to
                            see what you download, search for or view on the
                            site.
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
                            analytics and debugging purposes.
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
                                href="mailto:security@wanderer.moe"
                                className="text-primary hover:text-muted-foreground transition-all duration-150"
                            >
                                security@wanderer.moe
                            </Link>{" "}
                            for any privacy concerns.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
