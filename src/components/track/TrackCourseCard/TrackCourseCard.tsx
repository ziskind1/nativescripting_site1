import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Course, CourseLevel } from '../../../domain/models';
import ActionButton from '../../ActionButton/ActionButton';
import LevelIcon from '../../LevelIcon/LevelIcon';

// import './CourseCard2.css';
import { getAuthorImgSrc } from '../../../utils/urls';


interface TrackCourseCardProps {
    course: Course;
    onSelect?: () => void;
}

function getCourseIconHtml(course: Course): JSX.Element[] {
    var ret = [];
    if (course.flavors.includes('Core')) {
        ret.push(
            <img alt="NativeScript Core logo" key={'nativescript_white.svg'} src="/img/nativescript_white.svg" />
        );
    }
    if (course.flavors.includes('Angular')) {
        ret.push(
            <img alt="NativeScript Angular logo"
                key={'nativescript_angular.svg'}
                src="/img/nativescript_angular.svg"
            />
        );
    }
    if (course.flavors.includes('Vue')) {
        ret.push(
            <img alt="NativeScript Vue logo" key={'nativescript_vue.svg'} src="/img/nativescript_vue.svg" />
        );
    }
    return ret;
}

function getLevelName(level: CourseLevel): string {
    switch (level.levelId) {
        case 1:
            return 'Beginner';
        case 2:
            return 'Intermediate';
        case 3:
            return 'Advanced';
    }
}

function getCourseLevelHtml(course: Course): JSX.Element {
    return (
        <div className="course-card-level-wrapper">
            <LevelIcon level={course.level} />{' '}
            <span>{getLevelName(course.level)}</span>
        </div>
    );
}


const TrackCourseBlock = styled.div`
width: 240px;
float: left;
margin-bottom: 20px;
margin-left: 10px;
cursor: pointer;
transition: all 0.3s ease;

:hover {
    transition-duration: 300ms;
    transform: scale(1.03);
}

@media (max-width: 640px)
{
        width: 100%;
}
`;

const CourseBox = styled.div`
position: relative;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;

@media only screen and (min-width: 641px)
{
    height: 100%;
}
`;

const CourseBottom = styled.div`
background-color: #032E74;
padding: 10px 15px;
position: relative;
z-index: 10;
flex: auto;
`;

const TrackCourseH4 = styled.h4`
font-size: 14px;
color: #fff;
margin-bottom: 40px;
`;

const CourseInfoBox = styled.div`
position: absolute;
bottom: 10px;
`;

const CourseAuthor = styled.p`
font-size: 11px;
font-weight: 500;
margin: 0;
`;
const CourseInfo = styled.p`
font-size: 11px;
font-weight: 500;
margin: 0;
line-height: 1.7em;
`;
const BadgeIcon = styled.div`
color: #ffffff;
fill: #ffffff;
width: 16px;
float: left;
margin-bottom: -2px;
`;

const BadgeText = styled.div`
float: left;
text-transform: uppercase;
color: #ffffff;
font-size: 11px;
font-weight: 700;
margin-left: 6px;
`;

interface CourseTopProps {
    courseImage: string;
}

const CourseTop = styled.div` 
    width: 100%;
    height: 180px;
    position: relative;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props: CourseTopProps)=>props.courseImage}), linear-gradient( 45deg, #0949b2 66%, #0845a9 66%, #0845a9 78%, #0a429c 78% );

    @media (max-width: 640px)
    {
            height: 200px;
            background-size: 300px;
            background-position: 50%;
            background-color:  #0949b2;
            background-image: url(${props=>(props as any).courseImage});
    }
    `;

interface BadgeProps {
    label: string;
}

const Badge = styled.div`
    background-color: #b517ec;
    padding: 3px 6px 0;
    width: 100px;
    margin-top: 10px;
    display: ${(props: BadgeProps) => props.label ? 'block' : 'none'};

    :before {
        content: " ";
        display: table;
    }

    :after {
        clear: both;
        content: " ";
        display: table;
    }
    `;

export const TrackCourseCard = (
    props: TrackCourseCardProps
) => {
    const course = props.course;
    const firstAuthor = course.authors[0];

    const actionBtnText = props.course.products.some(p => p.pricesale === 0)
        ? 'free course'
        : 'learn more';
    const actionBtnType =
        props.course.label === 'PRESALE' ? 'secondary' : 'primary';

    let courseLabelClassName = 'course-tag';
    switch (props.course.label) {
        case 'NEW':
            courseLabelClassName = 'course-tag course-tag-new';
            break;
        case 'PRESALE':
            courseLabelClassName = 'course-tag';
            break;
        case 'SALE':
            courseLabelClassName = 'course-tag';
            break;
        case 'POPULAR':
            courseLabelClassName = 'course-tag course-tag-new';
            break;
        case 'UPDATED':
            courseLabelClassName = 'course-tag course-tag-new';
            break;
        default:
            courseLabelClassName = 'course-tag';
    }

    const authorImgSrc = getAuthorImgSrc(firstAuthor.picture, 100);

    const courseIconHtml = getCourseIconHtml(props.course);

    const courseLabelHtml =
        props.course.label === '' ? null : (
            <span className={courseLabelClassName}>{course.label}</span>
        );

    const levelHtml = getCourseLevelHtml(course);
    const courseImage = `/img/illustrations/transparent_bg/${course.url}.svg`;

    return (

        <TrackCourseBlock>
            <Link to={'/course/' + course.url}>
                <CourseBox>
                    <CourseTop courseImage={courseImage}>
                        <Badge label={course.label}>
                            <BadgeIcon><svg id="icon-interactive" viewBox="0 0 24 24" width="16px" height="16px"><g><path d="M22 10.054h-2.025V5.997H3.996V17.98h8.051V20H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.054zm-3.346 5.178l3.199 3.199a.503.503 0 0 1 0 .71l-.711.712a.503.503 0 0 1-.71 0l-3.2-3.2-.937 1.875a.503.503 0 0 1-.911-.027l-3.343-7.8a.503.503 0 0 1 .66-.66l7.8 3.343a.503.503 0 0 1 .027.911l-1.874.937z"></path></g></svg>
                            </BadgeIcon>
                            <BadgeText>{course.label}</BadgeText>
                        </Badge>
                    </CourseTop>
                    <CourseBottom>
                        <TrackCourseH4>{course.title}</TrackCourseH4>
                        <CourseInfoBox>
                            <CourseAuthor>{firstAuthor.name}</CourseAuthor>
                            <CourseInfo>{}</CourseInfo>

                        </CourseInfoBox>
                    </CourseBottom>
                </CourseBox>
            </Link>
        </TrackCourseBlock>

    );
};
