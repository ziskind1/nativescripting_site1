import { Chapters_2 } from '../graphql-types';
import { Chapter } from '../models';
import { lessonFromLesson_2 } from './lesson-types';

export function chapterFromChapter_2(l: Chapters_2, index: number): Chapter {
  return {
    id: l.id,
    name: l.name,
    lessons: l.lessons.map((l, idx) => lessonFromLesson_2(l, idx))
  };
}
