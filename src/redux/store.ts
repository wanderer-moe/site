import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./reducer";
import {
    createStateSyncMiddleware,
    initMessageListener,
} from "redux-state-sync";
import {
    useDispatch,
    TypedUseSelectorHook,
    useSelector,
    useStore,
} from "react-redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const blacklist = ["persist/PERSIST", "persist/REHYDRATE"];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "register",
                ],
                ignoredActionPaths: ["register"],
                ignoredPaths: ["register"],
            },
        }).prepend(
            logger,
            createStateSyncMiddleware({
                predicate: (action) => {
                    if (typeof action !== "function") {
                        if (Array.isArray(blacklist)) {
                            return blacklist.indexOf(action.type) < 0;
                        }
                    }
                    return false;
                },
            }),
        ) as any,
});

export const persistor = persistStore(store);

initMessageListener(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppStore: () => AppStore = useStore;
export const makeStore = () => store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
