import * as React from 'react';
import { Chapter } from "../../../domain/models";
import { CurriculumLesson } from '../CurriculumLesson/CurriculumLesson';

import './CurriculumChapter.css';

interface CurriculumChapterProps {
    chapter: Chapter;
    isPublishedChapter: boolean;
    courseSlug: string;
}


export const CurriculumChapter: React.StatelessComponent<CurriculumChapterProps> = (props: CurriculumChapterProps) => {

    const lessonsHtml = props.chapter.lessons.map((lesson, idx) => {
        return (
            <li key={idx}>
                <CurriculumLesson
                    lesson={lesson}
                    courseSlug={props.courseSlug}
                    isPublishedChapter={props.isPublishedChapter}
                />
            </li>
        );
    });

    return (
        <div className="chapter-container">
            <h3>{props.chapter.name}</h3>

            <ul>
                {lessonsHtml}
            </ul>
        </div>
    );
};
