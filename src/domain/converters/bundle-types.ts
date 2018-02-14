import { defaultArray } from '../core';
import { BundlesJsonEdge } from '../graphql-types';
import { productFromProduct_3 } from './product-types';
import { chapterFromChapter_2 } from './chapter-types';
import { Course, asCourseLevel, asCourseFlavorType, Bundle } from '../models';

export function bundleFromBundlesJsonEdge(edge: BundlesJsonEdge, courses: Course[]): Bundle {
    const n = edge.node;
    return {
        id: n.id,
        title: n.title,
        url: n.url,
        bundleLevel: n.bundleLevel,
        courseIds: n.courseIds,
        promoremaining: n.promoremaining,
        promototal: n.promototal,
        subtitle: n.subtitle,
        description: n.description,
        products: defaultArray(n.products).map(productFromProduct_3)
    };
}
