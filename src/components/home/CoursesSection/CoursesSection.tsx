import * as React from 'react';
import { Course } from '../../../domain/models';
import { CourseCardList } from '../../CourseCard/CourseCardList';

import './CoursesSection.css';
import { CourseFilter, CourseFilterType } from '../CourseFilter/CourseFilter';
import CourseFilterDescription from '../CourseFilter/CourseFilterDescription';

export interface CoursesSectionProps {
  pageTitle: string;
  courses: Course[];
  selectedFilterType: CourseFilterType;
  onSelectFilterType: (filterType: CourseFilterType) => void;
}

const CoursesSection = (
  props: CoursesSectionProps
) => {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="heading">
          <h2 className="heading__title">{props.pageTitle}</h2>
        </div>

        <CourseFilter
          selectedFilterType={props.selectedFilterType}
          onSelectFilterType={props.onSelectFilterType}
        />

        <CourseFilterDescription
          selectedFilterType={props.selectedFilterType}
        />

        <CourseCardList courses={props.courses} />
      </div>
    </section>
  );
};

export default CoursesSection;
