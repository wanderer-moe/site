"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// @ts-ignore - too lazy to fix rn
export function ThemeProvider({ children, ...props }: any) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
