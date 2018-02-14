import * as React from "react";
import { Course } from "../../../domain/models";
import LevelIcon from "../../LevelIcon/LevelIcon";
import BundleCourse from './BundleCourse';

import './BundleCourseList.css';

export interface BundleCourseListProps {
    courses: Course[];
}

const BundleCourseList: React.StatelessComponent<BundleCourseListProps> = (props: BundleCourseListProps) => {

    const html = props.courses.map((course, idx) => {
        return (
            <BundleCourse key={idx} course={course} />
        );
    });

    return (
        <div className="bundle-course-list">
            {html}
        </div>
    );
};

export default BundleCourseList;
