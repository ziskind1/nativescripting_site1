import * as React from "react";
import { Course } from "../../../domain/models";
import LevelIcon from "../../LevelIcon/LevelIcon";

import './BundleCourse.css';


export interface BundleCourseProps {
    course: Course;
}

const BundleCourse: React.StatelessComponent<BundleCourseProps> = (props: BundleCourseProps) => {
    const course = props.course;

    return (
        <div className="bundle-course">
            <div className="bundle-course-info">

                <span className="title">{course.title}</span> <span className="tag course-tag course-tag-new" data-bind="text: tag, css: { 'course-tag-new': tag === 'NEW' }">NEW</span>
            </div>
            <LevelIcon level={props.course.level} />
        </div>
    );
};

export default BundleCourse;
