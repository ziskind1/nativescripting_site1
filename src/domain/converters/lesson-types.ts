import { CoursesJsonChaptersLessons, PreviewsJsonLessonPreviews } from '../graphql-types';
import { Lesson } from '../models';

export function lessonFromLesson_2(l: CoursesJsonChaptersLessons, index: number, lessonPreviews: PreviewsJsonLessonPreviews[]): Lesson {

  const prev = lessonPreviews.find(p => p.lessonId === l.id);

  return {
    id: l.id,
    chapterId: l.chapterId,
    name: l.name,
    lessonNumber: index,
    isPreview: l.isPreview,
    vidId: prev?.videoId
  };
}
