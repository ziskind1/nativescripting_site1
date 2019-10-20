export type TrackLevelType = 1 | 2 | 3;

export interface TrackLevel {
    levelId: TrackLevelType;
    levelName: string;
    levelDescription: string;
}

export interface Track {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    levels: TrackLevel[]
}
