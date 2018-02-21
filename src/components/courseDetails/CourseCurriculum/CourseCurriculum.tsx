import * as React from 'react';
import { Course } from "../../../domain/models";
import { CurriculumChapter } from '../CurriculumChapter/CurriculumChapter';

import './CourseCurriculum.css';


interface CourseCurriculumProps {
    course: Course;
}


export const CourseCurriculum: React.StatelessComponent<CourseCurriculumProps> = (props: CourseCurriculumProps) => {


    const chaptersHtml = props.course.chapters.map((chapter, idx) => {
        const isPublishedChapter = props.course.publishedChapters.includes(0) || props.course.publishedChapters.includes(chapter.id);

        return (
            <li key={idx}>
                <CurriculumChapter
                    chapter={chapter}
                    isPublishedChapter={isPublishedChapter}
                    courseSlug={props.course.url}
                />
            </li>
        );
    });

    return (
        <div className="course-curriculum-container">
            <h2>Curriculum</h2>

            <ul>
                {chaptersHtml}
            </ul>
        </div>

    );
};
