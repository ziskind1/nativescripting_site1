import * as React from "react";
import { CourseFlavorType, Course } from "../domain/models";
import { CourseCard } from './CourseCard';

interface CourseCardListProps {
    courses: Course[];

}

export const CourseCardList: React.StatelessComponent<CourseCardListProps> = (props: CourseCardListProps) => {


    const coursesHtml = props.courses.map((course, idx) => {
        return <CourseCard key={idx} course={course} />
    });

    return (
        <div className="card-block">
            <div className="container">
                <div className="col-md-12" id="loadCard">
                    {coursesHtml}
                </div>
            </div>
        </div>
    );
};
