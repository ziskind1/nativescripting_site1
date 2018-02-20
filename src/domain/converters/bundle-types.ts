import { defaultArray } from '../core';
import { BundlesJsonEdge } from '../graphql-types';
import { productFromProduct_3 } from './product-types';
import { Course, asCourseLevel, asCourseFlavorType, Bundle } from '../models';

export function bundleFromBundlesJsonEdge(edge: BundlesJsonEdge, allCourses: Course[]): Bundle {
    const n = edge.node;

    const courses = n.courseIds.map(id => allCourses.find(c => c.id === id));

    return {
        id: n.id,
        title: n.title,
        url: n.url,
        bundleLevel: n.bundleLevel,
        courses: courses,
        promoremaining: n.promoremaining,
        promototal: n.promototal,
        subtitle: n.subtitle,
        description: n.description,
        products: defaultArray(n.products).map(productFromProduct_3)
    };
}
