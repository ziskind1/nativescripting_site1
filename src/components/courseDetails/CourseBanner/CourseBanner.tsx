import * as React from 'react';
import { Course } from '../../../domain/models';

import './CourseBanner.css';

interface CourseBannerProps {
  course: Course;
}

export const CourseBanner: React.StatelessComponent<CourseBannerProps> = (
  props: CourseBannerProps
) => {
  const course = props.course;

  return (
    <div className="course-banner-container">
      <div className="course-banner-titles">
        <h1>{course.title}</h1>
        <h2 className="course-banner-subtitle">{course.subtitle}</h2>
      </div>
      <div className="course-banner-img">
        <img alt={course.title} src={`/img/illustrations/transparent_bg/${course.url}.svg`} />
      </div>
    </div>
  );
};
