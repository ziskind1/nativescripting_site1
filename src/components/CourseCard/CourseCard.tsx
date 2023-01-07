import * as React from 'react';
import { CourseFlavorType, Course } from '../../domain/models';
import ActionButton from '../ActionButton/ActionButton';
import LevelIcon from '../LevelIcon/LevelIcon';

import './CourseCard.css';
import { getAuthorImgSrc } from '../../utils/urls';

interface CourseCardProps {
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

export const CourseCard = (
  props: CourseCardProps
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

  const authorImgSrc = getAuthorImgSrc(firstAuthor.picture);

  const courseIconHtml = getCourseIconHtml(props.course);

  const courseLabelHtml =
    props.course.label === '' ? null : (
      <span className={courseLabelClassName}>{course.label}</span>
    );

  return (
    <div className="course-container">
      <div className="course-card-bg" />

      <div className="course-card-main">
        <div className="course-header">
          <div className="course-icons">{courseIconHtml}</div>
          <div className="course-labels">{courseLabelHtml}</div>
        </div>

        <div className="course-body">
          <div className="course-info-row">
            <LevelIcon level={course.level} />
            <h3 className="course-card-title">{course.title}</h3>
          </div>

          <div className="course-info-row">
            <img alt={firstAuthor.name}
              className="course-card-author-img"
              src={authorImgSrc}

            />
            <h3 className="course-card-author">{firstAuthor.name}</h3>
          </div>
        </div>
      </div>

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
