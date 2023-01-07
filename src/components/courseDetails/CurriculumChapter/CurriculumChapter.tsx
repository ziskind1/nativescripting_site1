import * as React from 'react';
import { Chapter } from '../../../domain/models';
import { CurriculumLesson } from '../CurriculumLesson/CurriculumLesson';
import { PublishingScheduleItem } from '../../../domain/models/publishing-schedule-item.model';

import './CurriculumChapter.css';

interface CurriculumChapterProps {
  chapter: Chapter;
  isPublishedChapter: boolean;
  chapterPublishScheduleItem: PublishingScheduleItem;
  courseSlug: string;
}

export const CurriculumChapter = (props: CurriculumChapterProps) => {
  const lessonsHtml = props.chapter.lessons.map((lesson, idx) => {
    return (
      <li key={idx}>
        <CurriculumLesson
          lesson={lesson}
          courseSlug={props.courseSlug}
          isPublishedChapter={props.isPublishedChapter}
          chapterPublishScheduleItem={props.chapterPublishScheduleItem}
        />
      </li>
    );
  });

  return (
    <div className="chapter-container">
      <h3>{props.chapter.name}</h3>

      <ul>{lessonsHtml}</ul>
    </div>
  );
};
