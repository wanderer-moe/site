import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Asset } from "~/lib/types";

export interface ISavedAssetsState {
    savedAssets: Asset[];
}

const initialState: ISavedAssetsState = {
    savedAssets: [],
};

export const savedAssetsSlice = createSlice({
    name: "savedAssets",
    initialState,
    reducers: {
        toggleSavedAsset: (state, action: PayloadAction<Asset>) => {
            const index = state.savedAssets.findIndex(
                (asset) => asset.path === action.payload.path,
            );
            if (index >= 0) {
                state.savedAssets.splice(index, 1);
            } else {
                state.savedAssets.push(action.payload);
            }
        },
        clearSavedAssets: (state) => {
            state.savedAssets = [];
        },
    },
});

export const { toggleSavedAsset, clearSavedAssets } = savedAssetsSlice.actions;

export const isAssetSaved = (state: ISavedAssetsState, asset: Asset) =>
    state.savedAssets.some((savedAsset) => savedAsset.path === asset.path);

export default savedAssetsSlice.reducer;
