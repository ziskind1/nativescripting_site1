import * as React from 'react';
import { Course } from '../../../domain/models';

import './CourseBanner.css';




interface CourseBannerProps {
    course: Course;
}

export const CourseBanner: React.StatelessComponent<CourseBannerProps> = (props: CourseBannerProps) => {

    const course = props.course;


    return (
        <div className="course-banner-container">
            <h1>{course.title}</h1>


        </div>
    );
};
