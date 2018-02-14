import * as React from "react";
import HomeBundleCourseSummary from "./HomeBundleCourseSummary";
import { Course } from "../../domain/models";

interface HomeBundleCourseSummaryListProps {
    courses: Course[];
}

export const HomeBundleCourseSummaryList: React.StatelessComponent<HomeBundleCourseSummaryListProps> = (props: HomeBundleCourseSummaryListProps) => {

    const coursesHtml = props.courses.map((course, idx) => {
        return <HomeBundleCourseSummary key={idx} course={course} />
    });

    return (
        <div className="lessons-list">
            {coursesHtml}
        </div>
    );
};
