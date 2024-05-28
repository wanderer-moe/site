import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { DeviceWarning } from "~/components/device-warning";
import NavBar from "~/components/nav/nav-bar";
import { SiteFooter } from "~/components/nav/footer";

const font = Plus_Jakarta_Sans({
    weight: ["500", "600", "700", "800"],
    style: "normal",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "wanderer.moe",
    description:
        "Centralized game assets database (previously wtf.dromzeh.dev)",
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
                    <NavBar />
                    <DeviceWarning />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
