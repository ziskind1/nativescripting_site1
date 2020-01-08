import { CoursesJsonChapters } from '../graphql-types';
import { Chapter } from '../models';
import { lessonFromLesson_2 } from './lesson-types';

export function chapterFromChapter_2(l: CoursesJsonChapters, index: number): Chapter {
  return {
    id: l.id,
    name: l.name,
    lessons: l.lessons.map((l, idx) => lessonFromLesson_2(l, idx))
  };
}
