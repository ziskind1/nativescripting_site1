import * as React from 'react';
import { Course } from '../../../domain/models';
import LevelIcon from '../../LevelIcon/LevelIcon';
import { CourseAuthorCard } from '../CourseAuthorCard/CourseAuthorCard';
import { CoursePurchaseArea } from '../CoursePurchaseArea/CoursePurchaseArea';
import { CourseCoverage } from '../CourseCoverage/CourseCoverage';

import './CourseMetaCard.css';




interface CourseMetaCardProps {
    course: Course;
}

export const CourseMetaCard: React.StatelessComponent<CourseMetaCardProps> = (props: CourseMetaCardProps) => {

    const course = props.course;


    return (
        <div className="course-meta-card-container">
            <h2>About this course</h2>

            <CourseAuthorCard author={course.authors[0]} />
            <CourseCoverage course={course} />
        </div>
    );
};
