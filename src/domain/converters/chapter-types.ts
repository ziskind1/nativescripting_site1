import { CoursesJsonChapters, PreviewsJsonLessonPreviews } from '../graphql-types';
import { Chapter } from '../models';
import { lessonFromLesson_2 } from './lesson-types';

export function chapterFromChapter_2(l: CoursesJsonChapters, index: number, lessonPreviews: PreviewsJsonLessonPreviews[]): Chapter {
  return {
    id: l.id,
    name: l.name,
    lessons: l.lessons.map((l, idx) => lessonFromLesson_2(l, idx, lessonPreviews))
  };
}
