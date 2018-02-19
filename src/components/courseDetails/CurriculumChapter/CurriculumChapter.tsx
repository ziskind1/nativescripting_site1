import * as React from 'react';
import { Chapter } from "../../../domain/models";
import { CurriculumLesson } from '../CurriculumLesson/CurriculumLesson';

interface CurriculumChapterProps {
    chapter: Chapter;
}

export const CurriculumChapter: React.StatelessComponent<CurriculumChapterProps> = (props: CurriculumChapterProps) => {

    const lessonsHtml = props.chapter.lessons.map((lesson, idx) => {
        return (
            <li key={idx}>
                <CurriculumLesson lesson={lesson} />
            </li>
        );
    });

    return (
        <div>
            Chapter {props.chapter.name}

            <ul>
                {lessonsHtml}
            </ul>
        </div>
    );
};
