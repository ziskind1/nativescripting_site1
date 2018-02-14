import * as React from "react";
import { CourseFlavorType, Course } from "../domain/models";
import ActionButton from "./ActionButton/ActionButton";
import LevelIcon from "./LevelIcon/LevelIcon";


interface CourseCardProps {
    course: Course;
    onSelect?: () => void;
}

function getCourseIcons(course: Course): string[] {
    var ret = [];
    if (course.flavors.includes('Core')) {
        ret.push('/img/nativescript_white.svg');
    }
    if (course.flavors.includes('Angular')) {
        ret.push('/img/nativescript_angular.svg');
    }
    return ret;
};


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
