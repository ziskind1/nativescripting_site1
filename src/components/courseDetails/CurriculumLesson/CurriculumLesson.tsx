import * as React from 'react';
import { Lesson } from '../../../domain/models';
import { PublishingScheduleItem } from '../../../domain/models/publishing-schedule-item.model';

import './CurriculumLesson.css';

interface CurriculumLessonProps {
  lesson: Lesson;
  isPublishedChapter: boolean;
  chapterPublishScheduleItem: PublishingScheduleItem;
  courseSlug: string;
}

function getLessonActionUrl(courseSlug: string, lessonId: string) {
  return `http://nativescripting.teachable.com/courses/${courseSlug}/lectures/${lessonId}`;
}

export const CurriculumLesson = (props: CurriculumLessonProps) => {
  const actionText = props.lesson.isPreview ? 'Preview' : 'Start';
  const actionLinkClassName = props.lesson.isPreview
    ? 'lesson-preview-link'
    : 'lesson-start-link';

  const lessonActionUrl = getLessonActionUrl(props.courseSlug, props.lesson.lessonId);
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  
  const lessonDate = props.chapterPublishScheduleItem
    ? 'Coming ' +
      props.chapterPublishScheduleItem.date.toLocaleDateString(
        'en-US',
        dateOptions
      )
    : 'Planned Lesson';

  const lessonActionHtml = props.isPublishedChapter ? (
    <div className="lesson-action-wrapper">
      <a className={actionLinkClassName} href={lessonActionUrl}>
        {actionText}
      </a>
    </div>
  ) : (
    <div className="lesson-action-wrapper">
      <span>{lessonDate}</span>
    </div>
  );

  return (
    <div className="lesson-container">
      <div className="lesson-number-wrapper">
        <span>{props.lesson.lessonNumber}</span>
      </div>
      <div className="lesson-name-wrapper">
        <span>{props.lesson.name}</span>
      </div>
      {lessonActionHtml}
    </div>
  );
};
