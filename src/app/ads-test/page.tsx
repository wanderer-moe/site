import { AdBanner } from "~/components/ads/ad-banner";

export default function AdsTestPage() {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="bg-primary p-4 rounded-lg">
                <AdBanner
                    dataAdFormat="auto"
                    dataAdSlot="3016588414"
                    pId="pub-7772886196789799"
                    dataFullWidthResponsive={true}
                />
            </div>
        </main>
    );
}
