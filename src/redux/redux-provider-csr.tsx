"use client";

import dynamic from "next/dynamic";

export const ReduxProvider = dynamic(() => import("~/redux/redux-provider"), {
    ssr: false,
});
