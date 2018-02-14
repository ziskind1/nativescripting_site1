import * as React from "react";
import { Course } from "../../domain/models";

interface HomeBundleCourseSummaryProps {
    course: Course;
}

function HomeBundleCourseSummary(props: HomeBundleCourseSummaryProps) {

    return (
        <div>
            <div className="bundle-course">
                <div className="bundle-course-info">
                    <span className="authors " data-ko-ignore data-ko-keep data-bind="text: authorNames"></span>
                    <span className="title" data-ko-ignore data-ko-keep data-bind="text: title"></span>
                    <span className="tag course-tag" data-ko-ignore data-ko-keep data-bind="text: tag, css: { 'course-tag-new': tag === 'NEW' }"></span>

                </div>
                <img data-ko-ignore data-ko-keep data-bind="attr: { src: getLevelIcon({
                            l1: '/img/level_icon1.svg',
                            l2: '/img/level_icon2.svg',
                            l3: '/img/level_icon3.svg'
                        }) }" title="Course level" />
            </div>
            <div className="line"></div>
        </div>
    );
}

export default HomeBundleCourseSummary;
