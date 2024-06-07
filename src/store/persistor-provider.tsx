"use client";

import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./index";

export const PersisterProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};

export default PersisterProvider;
