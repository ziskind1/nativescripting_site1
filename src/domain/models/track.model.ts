export type TrackLevelType = 1 | 2 | 3;

export interface TrackLevel {
    levelId: TrackLevelType;
    levelName: string;
    levelDescription: string;
}

export interface TrackBundle {
    bundleId: string;
    bundleOrder: number;
    bundleDescription: string;
}

export interface Track {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    levels: TrackLevel[];
    bundles: TrackBundle[];
}
