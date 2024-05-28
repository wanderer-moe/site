export type GamesRoute = {
    success: boolean;
    status: string;
    path: string;
    games: {
        name: string;
        path: string;
        tags: string[];
        totalFiles: number;
        lastUploaded: string;
        subfolders: {
            name: string;
            path: string;
            fileCount: number;
            lastUploaded: string;
        }[];
    }[];
};

export type GameRoute = {
    success: boolean;
    status: string;
    game: string;
    totalFiles: number;
    lastUploaded: string;
    locations: {
        name: string;
        path: string;
        fileCount: number;
        popularity: number;
        lastUploaded: string;
    }[];
};

export type CategoryRoute = {
    success: boolean;
    status: string;
    path: string;
    game: string; // i.e genshin-impact
    asset: string; // i.e character-sheets
    lastUploaded: Asset;
    images: Asset[];
};

export type Asset = {
    name: string;
    nameWithExtension: string;
    path: string;
    uploaded: string;
    size: number;
};
