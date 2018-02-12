import { AuthorsJsonEdge, products_3, lessons_2 } from '../graphql-types';
import { Author, asAuthorType, Product, Lesson } from '../models';

export function lessonFromLesson_2(l: lessons_2, index: number): Lesson {
    return {
        id: l.id,
        chapterId: l.chapterId,
        name: l.name,
        lessonNumber: index,
        isPreview: l.btnText === 'Preview'
    };
}
