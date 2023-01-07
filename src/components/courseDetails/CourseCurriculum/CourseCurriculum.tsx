import * as React from 'react';
import { Course } from '../../../domain/models';
import { CurriculumChapter } from '../CurriculumChapter/CurriculumChapter';

import './CourseCurriculum.css';

interface CourseCurriculumProps {
  course: Course;
}

export const CourseCurriculum  = (props: CourseCurriculumProps) => {
  const chaptersHtml = props.course.chapters.map((chapter, idx) => {
    const isPublishedChapter =
      props.course.publishedChapters.includes(0) ||
      props.course.publishedChapters.includes(chapter.chapterId);

    const chapterPublishScheduleItem = props.course.publishingScheduleItems.find(
      i => i.publishingScheduleItemId === chapter.chapterId
    );

    return (
      <li key={idx}>
        <CurriculumChapter
          chapter={chapter}
          isPublishedChapter={isPublishedChapter}
          chapterPublishScheduleItem={chapterPublishScheduleItem}
          courseSlug={props.course.url}
        />
      </li>
    );
  });

  return (
    <div className="course-curriculum-container">
      <h2>Curriculum</h2>

      <ul>{chaptersHtml}</ul>
    </div>
  );
};
