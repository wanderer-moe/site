import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { storage } from "./storage";
import assetSlice from "./slice/asset-slice";
import savedAssetsSlice from "./slice/saved-assets-slice";
import downloadHistoryReducer from "./slice/download-history-slice";

export const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["assets", "savedAssets", "downloadHistory"],
};

const rootReducer = combineReducers({
    assets: assetSlice,
    savedAssets: savedAssetsSlice,
    downloadHistory: downloadHistoryReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
