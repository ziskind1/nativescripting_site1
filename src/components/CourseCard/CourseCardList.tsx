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

/*
function getOldListHtml(props: CourseCardListProps) {
    const coursesHtml = getCoursesHtml(props);
    return (
        <div className="course-card-list">
            <div className="container">
                <div className="col-md-12" id="loadCard">
                    {coursesHtml}
                </div>
            </div>
        </div>
    );
}
*/

export const CourseCardList: React.StatelessComponent<CourseCardListProps> = (props: CourseCardListProps) => {

    //return getOldListHtml(props);

    const coursesHtml = getCoursesHtml(props);

    return (
        <div className="course-card-list">
            {coursesHtml}
        </div>
    );
};
