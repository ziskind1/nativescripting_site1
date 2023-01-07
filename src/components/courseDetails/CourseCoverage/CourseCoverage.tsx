import * as React from 'react';
import { Course } from '../../../domain/models';

import './CourseCoverage.css';
import LevelIcon from '../../LevelIcon/LevelIcon';

const iconCore = (
  <img
    alt="NativeScript Core logo"
    key={'nativescript_white.svg'}
    src="/img/nativescript_white.svg"
  />
);
const iconNg = (
  <img
    alt="NativeScript Angular logo"
    key={'nativescript_angular.svg'}
    src="/img/nativescript_angular.svg"
  />
);
const iconVue = (
  <img
    alt="NativeScript Vue logo"
    key={'nativescript_vue.svg'}
    src="/img/nativescript_vue.svg"
  />
);

export interface CourseCoverageProps {
  course: Course;
}

interface CourseIconData {
  icon: JSX.Element;
  name: string;
}

function getCourseIconData(course: Course): CourseIconData[] {
  const ret: CourseIconData[] = [];
  if (course.flavors.includes('Angular')) {
    ret.push({
      icon: iconNg,
      name: 'NativeScript with Angular'
    });
  }
  if (course.flavors.includes('Core')) {
    ret.push({
      icon: iconCore,
      name: 'NativeScript Core'
    });
  }
  if (course.flavors.includes('Vue')) {
    ret.push({
      icon: iconVue,
      name: 'NativeScript-Vue'
    });
  }
  return ret;
}

export const CourseCoverage = (
  props: CourseCoverageProps
) => {
  const course = props.course;
  const iconsData = getCourseIconData(course);
  let lessonCount = 0;
  course.chapters.forEach(c => (lessonCount += c.lessons.length));
  const lessonsStr =
    lessonCount === 0
      ? 'Curriculum coming soon'
      : course.publishingScheduleItems.length > course.publishedChapters.length
      ? `${lessonCount} lessons released, with more on the way`
      : `${lessonCount} lessons`;

  const iconsDataHtml = iconsData.map((d, idx) => {
    return (
      <li key={idx} className="course-coverage-item">
        <div className="course-coverage-icon-wrapper">{d.icon}</div>
        <div>{d.name}</div>
      </li>
    );
  });

  return (
    <div className="course-coverage-container">
      <ul className="course-coverage-icons">{iconsDataHtml}</ul>

      <div className="course-coverage-item">
        <div>
          <LevelIcon level={course.level} />
        </div>
        <div>{lessonsStr}</div>
      </div>
    </div>
  );
};
