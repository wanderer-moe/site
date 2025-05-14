import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Asset } from "~/lib/types";

interface DownloadHistoryEntry {
    id: string;
    timestamp: number;
    assets: Asset[];
    totalSize: number;
}

interface IDownloadHistoryState {
    history: DownloadHistoryEntry[];
}

const initialState: IDownloadHistoryState = {
    history: [],
};

export const downloadHistorySlice = createSlice({
    name: "downloadHistory",
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<{ assets: Asset[] }>) => {
            const totalSize = action.payload.assets.reduce(
                (sum, asset) => sum + (asset.size || 0),
                0,
            );
            state.history.unshift({
                id: crypto.randomUUID(),
                timestamp: Date.now(),
                assets: action.payload.assets,
                totalSize,
            });
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const { addToHistory, clearHistory } = downloadHistorySlice.actions;
export default downloadHistorySlice.reducer;
