import * as React from "react";
import { Course } from "../../../domain/models";
import LevelIcon from "../../LevelIcon/LevelIcon";

import './BundleCourse.css';


export interface BundleCourseProps {
    course: Course;
}

const BundleCourse: React.StatelessComponent<BundleCourseProps> = (props: BundleCourseProps) => {
    return (
        <div className="bundle-course">
            <div className="bundle-course-info">
                <span className="authors">Paul Halliday</span>
                <span className="title">NativeScript with Angular Web Application Conversion</span> <span className="tag course-tag course-tag-new" data-bind="text: tag, css: { 'course-tag-new': tag === 'NEW' }">NEW</span>
            </div>
            <LevelIcon level={props.course.level} />
        </div>
    );
};

export default BundleCourse;
