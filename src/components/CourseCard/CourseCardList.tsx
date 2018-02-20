import * as React from "react";
import { CourseFlavorType, Course } from "../../domain/models";
import { CourseCard } from './CourseCard';

import './CourseCardList.css';

interface CourseCardListProps {
    courses: Course[];
}

function getCoursesHtml(props: CourseCardListProps) {
    return props.courses.map((course, idx) => {
        return <CourseCard key={idx} course={course} />
    });
}

export const CourseCardList: React.StatelessComponent<CourseCardListProps> = (props: CourseCardListProps) => {

    const coursesHtml = getCoursesHtml(props);

    return (
        <div className="course-card-list">
            {coursesHtml}
        </div>
    );
};
