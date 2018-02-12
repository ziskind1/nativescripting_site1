import * as React from 'react';
import Link from 'gatsby-link';
import { CourseFlavorType, Course } from '../domain/models';


export interface FlavoredCourseListProps {
    children?: React.ReactNode;
    flavor: CourseFlavorType;
    courses: Course[];
}


class FlavoredCourseList extends React.Component<FlavoredCourseListProps, {}> {

    constructor() {
        super();
    }

    public render() {
        const coursesHtml = this.props.courses.map((course: Course, idx: number) => {

            const courseUrl = `/course/${course.url}`;

            return (
                <div key={idx}>
                    <Link to={courseUrl}>{course.title}</Link>
                </div>
            );
        });

        return (
            <div>
                <h1>Flavor</h1>
                {coursesHtml}
            </div>
        );
    }

};

export default FlavoredCourseList;
