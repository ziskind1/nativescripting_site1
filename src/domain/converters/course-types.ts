import { defaultArray } from '../core';
import { CoursesJsonEdge } from '../graphql-types';
import { productFromProduct_3 } from './product-types';
import { chapterFromChapter_2 } from './chapter-types';
import { Course, asCourseLevel, Author, asCourseFlavorType } from '../models';

export function courseFromCoursesJsonEdge(edge: CoursesJsonEdge, authors: Author[]): Course {
    const n = edge.node;
    return {
        id: n.id,
        title: n.title,
        subtitle: n.subtitle,
        description: n.description,
        level: asCourseLevel(n.level),
        url: n.url,
        label: n.label,
        launchdate: new Date(n.launchdate),
        authors: getAuthorsByAuthorIds(authors, n.authors),
        chapters: defaultArray(n.chapters).map((c, idx) => chapterFromChapter_2(c, idx)),
        flavors: defaultArray(n.flavors).map(asCourseFlavorType),
        products: defaultArray(n.products).map(productFromProduct_3)
    };
}

function getAuthorsByAuthorIds(authors: Author[], ids: string[]) {
    return authors.filter(a => ids.includes(a.id));
}

