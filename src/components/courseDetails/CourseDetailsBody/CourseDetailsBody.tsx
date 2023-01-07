import * as React from 'react';
import { Course, Bundle } from "../../../domain/models";
import { CourseCurriculum } from '../CourseCurriculum/CourseCurriculum';
import { CourseBundleArea } from '../CourseBundleArea/CourseBundleArea';


import './CourseDetailsBody.css';

interface CourseDetailsBodyProps {
    course: Course;
    bundles: Bundle[];
}


export const CourseDetailsBody = (props: CourseDetailsBodyProps) => {
    return (
        <div className="course-details-body-container">
            <CourseCurriculum course={props.course} />

            <CourseBundleArea bundles={props.bundles} />
        </div>
    );
};
