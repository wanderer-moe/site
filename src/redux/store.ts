import { configureStore } from "@reduxjs/toolkit";
import * as PersistCases from "redux-persist";
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
import persistStore from "redux-persist/es/persistStore";

const blacklist = [...Object.keys(PersistCases)];

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: false,
            // immutableCheck: false,
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

initMessageListener(store);

export const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppStore: () => AppStore = useStore;
export const makeStore = () => store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
