import { CoursesJsonChaptersLessons } from '../graphql-types';
import { Lesson } from '../models';

export function lessonFromLesson_2(l: CoursesJsonChaptersLessons, index: number): Lesson {
  return {
    id: l.id,
    chapterId: l.chapterId,
    name: l.name,
    lessonNumber: index,
    isPreview: l.isPreview
  };
}
