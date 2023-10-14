import { fixCasing } from './fixCasing'

export const mapGame = (game: string): string => {
    const gameMapping: Record<string, string> = {
        'honkai-star-rail': 'Honkai: Star Rail',
        'goddess-of-victory-nikke': 'Goddess of Victory: Nikke',
        'project-sekai': 'Project SEKAI COLORFUL STAGE!',
        'sino-alice': 'SINoALICE',
        'cookie-run': 'Cookie Run: Kingdom',
    }

    return gameMapping[game] ?? fixCasing(game)
}

export const mapAssetType = (assetType: string): string => {
    const assetTypeMapping: Record<string, string> = {
        tcg: 'TCG',
        'tcg-sheets': 'TCG Sheets',
    }

    return assetTypeMapping[assetType] ?? fixCasing(assetType)
}

export const arbitraryGameSort: Record<string, number> = {
    'genshin-impact': 1,
    'honkai-star-rail': 2,
    'honkai-impact-3rd': 3,
    'goddess-of-victory-nikke': 4,
    'project-sekai': 5,
    'tower-of-fantasy': 6,
    'cookie-run': 7,
    'zenless-zone-zero': 8,
    'wuthering-waves': 9,
    'sino-alice': 10,
    dislyte: 11,
}
