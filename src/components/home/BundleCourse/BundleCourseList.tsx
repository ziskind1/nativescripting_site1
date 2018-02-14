import * as React from "react";
import { Course } from "../../../domain/models";
import LevelIcon from "../../LevelIcon/LevelIcon";
import BundleCourse from './BundleCourse';

export interface BundleCourseListProps {
    courses: Course[];
}

const BundleCourseList: React.StatelessComponent<BundleCourseListProps> = (props: BundleCourseListProps) => {

    const html = props.courses.map((course, idx) => {
        return (
            <BundleCourse course={course} />
        );
    });

    return (
        <div className="">
            {html}
        </div>
    );
};

export default BundleCourseList;
