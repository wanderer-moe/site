import * as React from "react";

export function useBrowserDetection() {
    const [browser, setBrowser] = React.useState<string | null>(null);
    const [os, setOs] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const userAgent = window.navigator.userAgent.toLowerCase();

            console.log(userAgent);

            const browserMap: { [key: string]: string } = {
                chrome: "chrome",
                safari: "safari",
                firefox: "firefox",
                edge: "edge",
                opera: "opera",
            };

            const osMap: { [key: string]: string } = {
                android: "android",
                ios: "iphone",
                windows: "windows",
                mac: "macintosh",
                linux: "linux",
            };

            let browser = "";
            let os = "";

            Object.keys(browserMap).some((key) => {
                if (userAgent.includes(browserMap[key])) {
                    browser = key;
                    return true;
                }
                return false;
            });

            Object.keys(osMap).some((key) => {
                if (userAgent.includes(osMap[key])) {
                    os = key;
                    return true;
                }
                return false;
            });

            setBrowser(browser);
            setOs(os);
        }
    }, []);

    return { browser, os };
}
