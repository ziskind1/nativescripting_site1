import { TracksJsonEdge, TracksJson, Levels_2, Bundles_2 } from '../graphql-types';
import { Track, TrackLevel, TrackLevelType, TrackBundle } from '../models';
import { defaultArray } from '../core';


export function trackLevelFromLevels_2(l: Levels_2): TrackLevel {
    return {
        levelId: l.levelId as TrackLevelType,
        levelName: l.title,
        levelDescription: l.description
    };
}

export function trackBundleFromBundles_2(b: Bundles_2): TrackBundle {
    return {
        bundleId: b.id,
        bundleOrder: b.order,
        bundleDescription: b.description
    };
}

export function trackFromTracksJsonEdge(edge: TracksJsonEdge): Track {
    const t = edge.node;
    return trackFromTracksJson(t);
}

export function trackFromTracksJson(t: TracksJson): Track {
    const track: Track = {
        id: t.id,
        title: t.title,
        description: t.description,
        imgSrc: t.imageSrc,
        levels: defaultArray(t.levels).map(trackLevelFromLevels_2),
        bundles: defaultArray(t.bundles).map(trackBundleFromBundles_2)
    };
    return track;
}
