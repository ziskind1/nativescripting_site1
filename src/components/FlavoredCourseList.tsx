import * as React from 'react';
import Link from 'gatsby-link';


export interface FlavoredCourseListProps {
    children?: React.ReactNode;
    flavor: string;
    courses: any[];
}


class FlavoredCourseList extends React.Component<FlavoredCourseListProps, {}> {

    constructor() {
        super();
    }

    public render() {
        const coursesHtml = this.props.courses.map((course: any, i: number) => {

            const courseUrl = `/course/${course.url}`;

            return (
                <div key={i}>
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
