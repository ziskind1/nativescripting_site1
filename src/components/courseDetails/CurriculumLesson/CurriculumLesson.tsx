import * as React from 'react';
import { Lesson } from "../../../domain/models";

interface CurriculumLessonProps {
    lesson: Lesson;
}

export const CurriculumLesson: React.StatelessComponent<CurriculumLessonProps> = (props: CurriculumLessonProps) => {
    return (
        <div>
            Lesson {props.lesson.name}
        </div>
    );
};
