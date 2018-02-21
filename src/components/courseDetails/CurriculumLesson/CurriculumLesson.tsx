import * as React from 'react';
import { Lesson } from "../../../domain/models";

import './CurriculumLesson.css';

interface CurriculumLessonProps {
    lesson: Lesson;
    isPublishedChapter: boolean;
    courseSlug: string;
}

function getLessonActionUrl(courseSlug: string, lessonId: string) {
    return `http://nativescripting.teachable.com/courses/${courseSlug}/lectures/${lessonId}`;
}

export const CurriculumLesson: React.StatelessComponent<CurriculumLessonProps> = (props: CurriculumLessonProps) => {

    const actionText = props.lesson.isPreview ? 'Preview' : 'Start';
    const actionLinkClassName = props.lesson.isPreview ? 'lesson-preview-link' : 'lesson-start-link';

    const lessonActionUrl = getLessonActionUrl(props.courseSlug, props.lesson.id);

    const lessonActionHtml = props.isPublishedChapter ?
        <div className="lesson-action-wrapper">
            <a className={actionLinkClassName} href={lessonActionUrl}>{actionText}</a>
        </div>
        :
        <div className="lesson-action-wrapper">
            <span>Planned lesson</span>
        </div>;

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
