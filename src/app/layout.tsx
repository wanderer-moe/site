import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { DeviceWarning } from "~/components/device-warning";
import NavBar from "~/components/nav/nav-bar";
import { SiteFooter } from "~/components/nav/footer";
import { ScrollToTop } from "~/components/nav/scroll-to-top";
import { Toaster } from "sonner";
import { AxiomWebVitals } from "next-axiom";

const font = Plus_Jakarta_Sans({
    style: "normal",
    subsets: ["latin"],
    // 400 lowkey hurts my eyes
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
                <ThemeProvider>
                    <AxiomWebVitals />
                    <ScrollToTop />
                    <NavBar />
                    <DeviceWarning />
                    {children}
                    <SiteFooter />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
