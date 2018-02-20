import * as React from 'react';
import { Course } from '../../../domain/models';
import LevelIcon from '../../LevelIcon/LevelIcon';
import { CourseAuthorCard } from '../CourseAuthorCard/CourseAuthorCard';
import { CoursePurchaseArea } from '../CoursePurchaseArea/CoursePurchaseArea';
import { CourseCoverage } from '../CourseCoverage/CourseCoverage';

import './CourseMeta.css';




interface CourseMetaProps {
    course: Course;
}

export const CourseMeta: React.StatelessComponent<CourseMetaProps> = (props: CourseMetaProps) => {

    const course = props.course;


    return (
        <div className="course-meta-container">

            <div className="course-meta-details-pane">

                <div className="course-meta-details-desc-container">
                    <h2>What you'll learn</h2>
                    <p>
                        {course.description}
                    </p>
                </div>

                <div className="course-meta-actionable">
                    <CoursePurchaseArea course={course} />
                    <CourseCoverage course={course} />
                </div>
            </div>


            <div className="course-meta-author-pane">
                <CourseAuthorCard author={course.authors[0]} />
            </div>

        </div>
    );
};
