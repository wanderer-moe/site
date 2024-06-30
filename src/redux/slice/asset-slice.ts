import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Asset } from "~/lib/types";

export interface IAssetState {
    isMassDownloading: boolean;
    selectedAssets: Asset[];
}

const initialState: IAssetState = {
    isMassDownloading: false,
    selectedAssets: [],
};

export const assetSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {
        setSelectedAssets: (state, action: PayloadAction<Asset[]>) => {
            state.selectedAssets = action.payload || [];
        },
        setIsMassDownloading: (state, action: PayloadAction<boolean>) => {
            state.isMassDownloading = action.payload || false;
        },
        toggleAssetSelection: (state, action: PayloadAction<Asset>) => {
            if (state.isMassDownloading) return;

            const index = state.selectedAssets.findIndex(
                (asset) => asset.path === action.payload.path,
            );
            if (index >= 0) {
                state.selectedAssets.splice(index, 1);
            } else {
                state.selectedAssets.push(action.payload);
            }
        },
        clearSelectedAssets: (state) => {
            state.selectedAssets = [];
        },
    },
});

export const isAssetSelected = (state: IAssetState, asset: Asset) =>
    state.selectedAssets.some(
        (selectedAsset) => selectedAsset.path === asset.path,
    );

export const getSelectedAssets = (state: IAssetState) => state.selectedAssets;

export const {
    setSelectedAssets,
    setIsMassDownloading,
    toggleAssetSelection,
    clearSelectedAssets,
} = assetSlice.actions;

export default assetSlice.reducer;
