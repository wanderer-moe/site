import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { storage } from "./storage";
import assetSlice from "./slice/asset-slice";

export const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["assets"],
};

const rootReducer = combineReducers({
    assets: assetSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
