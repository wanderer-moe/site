import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    useDispatch,
    TypedUseSelectorHook,
    useSelector,
    useStore,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
    createStateSyncMiddleware,
    initMessageListener,
    initStateWithPrevTab,
    withReduxStateSync,
} from "redux-state-sync";
import {
    PERSIST,
    PURGE,
    REHYDRATE,
    REGISTER,
    FLUSH,
    PAUSE,
} from "redux-persist/es/constants";

import assetSlice from "./slice/asset-slice";

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: number) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const assetPersistConfig = {
    key: "asset",
    storage: storage,
    whitelist: ["selectedAssets"],
};

const rootReducer = withReduxStateSync(combineReducers({ asset: assetSlice }));

const persistedReducer = persistReducer(assetPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).prepend(
            createStateSyncMiddleware({
                predicate: (action) => {
                    const blacklist = [
                        PERSIST,
                        PURGE,
                        REHYDRATE,
                        REGISTER,
                        FLUSH,
                        PAUSE,
                    ];
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

initStateWithPrevTab(store);

export const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppStore: () => AppStore = useStore;
export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
