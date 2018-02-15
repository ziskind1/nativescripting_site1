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

/*
export const CourseCard: React.StatelessComponent<CourseCardProps> = (props: CourseCardProps) => {

    const authorsHtml = props.course.authors.map((author, idx) => {
        return <h3 key={idx}>{author.name}</h3>;
    });

    const freeLabel = props.course.products.some(p => p.pricesale === 0) ? <p className="card-price-info">FREE COURSE</p> : null;

    const actionBtnText = props.course.products.some(p => p.pricesale === 0) ?
        'free course' : 'learn more';
    const actionBtnType = props.course.label === 'PRESALE' ? 'secondary' : 'primary';

    const courseIcons = getCourseIcons(props.course);
    const courseIconsHtml = courseIcons.map((icon, idx) => {
        const liStyle = {
            marginLeft: '-30px',
            marginBottom: '5px'
        };
        const imgStyle = {
            display: 'block',
            position: 'relative',
            zIndex: 5
        };
        return (
            <li key={idx} style={liStyle}>
                <img style={imgStyle} src={icon} />
            </li>
        );
    });

    const ulDivwrapperStyle = {
        position: 'relative'
    };

    const ulStyle = {
        position: 'absolute',
        margin: '0',
        top: '15px',
        right: '16px',
        listStyle: 'none'
    };


    const courseLabelClassName = props.course.label === 'NEW' ? 'course-tag course-tag-new' : 'course-tag';
    const courseTitleClassName = props.course.label === 'PRESALE' ? 'pre-text' : '';


    return (
        <div data-bind="attr: { 'data-zko-hook' : categories }" className="col-md-4 col-sm-6 col-xs-12">
            <div className="row">
                <div className="learn-card main-card">
                    <div className="top-block">

                        <LevelIcon level={props.course.level} />

                        <p className="new">
                            <span className={courseLabelClassName}>{props.course.label}</span>
                        </p>
                        <div className="card-header">
                            <div style={ulDivwrapperStyle}>
                                <ul style={ulStyle}>
                                    {courseIconsHtml}
                                </ul>
                            </div>
                            <p className={courseTitleClassName}>
                                {props.course.title}
                            </p>

                            {authorsHtml}

                            {freeLabel}

                        </div>
                        <p className="error">Please select the number of users</p>
                    </div>

                    <ActionButton text={actionBtnText} type={actionBtnType} url={'/course/' + props.course.url} />

                </div>
            </div>
        </div>
    );
};
*/
