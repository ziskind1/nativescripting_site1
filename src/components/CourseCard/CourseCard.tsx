import * as React from "react";
import { CourseFlavorType, Course } from "../../domain/models";
import ActionButton from "../ActionButton/ActionButton";
import LevelIcon from "../LevelIcon/LevelIcon";


import './CourseCard.css';

interface CourseCardProps {
    course: Course;
    onSelect?: () => void;
}

function getCourseIconHtml(course: Course): JSX.Element[] {
    var ret = [];
    if (course.flavors.includes('Core')) {
        ret.push(<img key={'nativescript_white.svg'} src="/img/nativescript_white.svg" />);
    }
    if (course.flavors.includes('Angular')) {
        ret.push(<img key={'nativescript_angular.svg'} src="/img/nativescript_angular.svg" />);
    }
    return ret;
};

export const CourseCard: React.StatelessComponent<CourseCardProps> = (props: CourseCardProps) => {

    const course = props.course;
    const firstAuthor = course.authors[0];

    const actionBtnText = props.course.products.some(p => p.pricesale === 0) ?
        'free course' : 'learn more';
    const actionBtnType = props.course.label === 'PRESALE' ? 'secondary' : 'primary';

    const courseLabelClassName = props.course.label === 'NEW' ? 'course-tag course-tag-new' : 'course-tag';

    const courseIconHtml = getCourseIconHtml(props.course);


    return (
        <div className="course-container">
            <div className="course-card-bg"></div>

            <div className="course-card-main">
                <div className="course-header">
                    <div className="course-icons">
                        {courseIconHtml}
                    </div>
                    <div className="course-labels">
                        <span className={courseLabelClassName}>{course.label}</span>
                    </div>
                </div>

                <div className="course-body">
                    <div className="course-info-row">
                        <LevelIcon level={course.level} />
                        <h3 className="course-card-title">{course.title}</h3>
                    </div>

                    <div className="course-info-row">
                        <img className="course-card-author-img" src={`/img/authors/${firstAuthor.picture}`} alt={firstAuthor.name} />
                        <h3 className="course-card-author">{firstAuthor.name}</h3>
                    </div>
                </div>

            </div>


            <div className="course-bottom">
                <div className="course-license">
                </div>
                <div className="course-license">
                </div>
                <ActionButton text={actionBtnText} type={actionBtnType} url={'/course/' + props.course.url} />
            </div>

        </div>
    );
}

