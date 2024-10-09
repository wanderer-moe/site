import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "~/components/nav/nav-bar";
import { SiteFooter } from "~/components/nav/footer";
import { ScrollToTop } from "~/components/nav/scroll-to-top";
import { Toaster } from "~/components/ui/sonner";
import { AxiomWebVitals } from "next-axiom";
import dynamic from "next/dynamic";
import Script from "next/script";
import { GoogleAdSense } from "next-google-adsense";
import { MobileBottomNav } from "~/components/nav/mobile-bottom-nav";

const ReduxProvider = dynamic(() => import("~/redux/redux-provider"), {
    ssr: false,
});

const font = Plus_Jakarta_Sans({
    style: "normal",
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://wanderer.moe"),
    title: "wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
};

export const viewport: Viewport = {
    themeColor: "#BFB7D6",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <GoogleAdSense publisherId="pub-7772886196789799" />
                <Script
                    async
                    src="https://cdn.seline.so/seline.js"
                    strategy="afterInteractive"
                />
                <ReduxProvider>
                    <AxiomWebVitals />
                    <ScrollToTop />
                    <NavBar />
                    {children}
                    <SiteFooter />
                    <Toaster />
                    <MobileBottomNav />
                </ReduxProvider>
            </body>
        </html>
    );
}
