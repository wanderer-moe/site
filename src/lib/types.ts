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

export type DiscordMembersRoute = {
    success: boolean;
    status: string;
    path: string;
    guild: {
        memberCount: number; // this defaults to 2600 if discord api doesnt return
        onlineCount: number; // this defaults to 350 if discord api doesnt return
    };
};

export type Asset = {
    name: string;
    nameWithExtension: string;
    path: string;
    uploaded: string;
    size: number;
};

export type Contributor = {
    id: string;
    username: string;
    globalname: string;
    avatar: string;
    roles: string[];
};

export type ContributorsRoute = {
    success: boolean;
    status: string;
    path: string;
    contributors: Contributor[];
};
