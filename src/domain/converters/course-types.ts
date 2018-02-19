import { defaultArray } from '../core';
import { CoursesJsonEdge, CoursesJson } from '../graphql-types';
import { productFromProduct_3 } from './product-types';
import { chapterFromChapter_2 } from './chapter-types';
import { Course, asCourseLevel, Author, asCourseFlavorType } from '../models';

export function courseFromCoursesJsonEdge(edge: CoursesJsonEdge, authors: Author[]): Course {
    const c = edge.node;
    return coursefromCoursesJson(c, authors);
}

export function coursefromCoursesJson(c: CoursesJson, authors: Author[]): Course {
    return {
        id: c.id,
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        level: asCourseLevel(c.level),
        url: c.url,
        label: c.label,
        launchdate: new Date(c.launchdate),
        authors: getAuthorsByAuthorIds(authors, c.authors),
        chapters: defaultArray(c.chapters).map((c, idx) => chapterFromChapter_2(c, idx)),
        flavors: defaultArray(c.flavors).map(asCourseFlavorType),
        products: defaultArray(c.products).map(productFromProduct_3)
    };
}

function getAuthorsByAuthorIds(authors: Author[], ids: string[]) {
    return authors.filter(a => ids.includes(a.id));
}

