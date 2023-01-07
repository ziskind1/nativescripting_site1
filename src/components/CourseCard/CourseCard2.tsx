import * as React from 'react';
import { Link } from 'gatsby';

import { Course, CourseLevel } from '../../domain/models';
import ActionButton from '../ActionButton/ActionButton';
import LevelIcon from '../LevelIcon/LevelIcon';

import './CourseCard2.css';
import { getAuthorImgSrc } from '../../utils/urls';

interface CourseCard2Props {
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

export const CourseCard2 = (
  props: CourseCard2Props
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

  //const authorImgSrc = getAuthorImgSrc(firstAuthor.picture);

  const courseIconHtml = getCourseIconHtml(props.course);

  const courseLabelHtml =
    props.course.label === '' ? null : (
      <span className={courseLabelClassName}>{course.label}</span>
    );

  const levelHtml = getCourseLevelHtml(course);

  return (
    <div className="course-container2">
      <Link to={'/course/' + course.url}>
        <div className="course-card-label">{courseLabelHtml}</div>
        <div className="course-card-flavors-container">
          <div className="course-icons">{courseIconHtml}</div>
        </div>

        <div className="course-card-poster">
          <img alt={course.title} src={`/img/illustrations/transparent_bg/${course.url}.svg`} />
        </div>

        <div className="course-card-main2">
          <div className="course-card-body">
            <h3 className="course-card-title">{course.title}</h3>
          </div>
          <div className="course-card-footer">
            <div className="">{levelHtml}</div>
          </div>
        </div>
      </Link>

      <div className="course-bottom">
        <div className="course-license" />
        <div className="course-license" />
        <ActionButton
          text={actionBtnText}
          type={actionBtnType}
          url={'/course/' + props.course.url}
        />
      </div>
    </div>
  );
};
