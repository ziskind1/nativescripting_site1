import { Lessons_2 } from '../graphql-types';
import { Lesson } from '../models';

export function lessonFromLesson_2(l: Lessons_2, index: number): Lesson {
  return {
    id: l.id,
    chapterId: l.chapterId,
    name: l.name,
    lessonNumber: index,
    isPreview: l.isPreview
  };
}
