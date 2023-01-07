import * as React from 'react';

import { CourseFilterType } from './CourseFilter';

import './CourseFilterDescription.css';

interface CourseFilterDescriptionProps {
  selectedFilterType: CourseFilterType;
}

const descAll =
  'All our available NativeScript courses, including NativeScript Core and NativeScript with Angular.';
const descFree =
  'You can start with these courses for free, as a way to get you to try this amazing technology. Then when you are ready to go deeper, you can purchase the premium courses.';
const descCore =
  'Courses for the NativeScript Core minded folks. MVVM, TypeScript, and no other UI frameworks.';
const descAngular =
  'Courses for the NativeScript with Angular folks. For those that want to use Angular in their native apps.';
const descVue =
  'Courses for the NativeScript-Vue folks. For those that want to use Vue in their native apps.';

function getDescriptionFromFilterType(ft: CourseFilterType) {
  switch (ft) {
    case 'All':
      return descAll;
    case 'Free':
      return descFree;
    case 'Core':
      return descCore;
    case 'Angular':
      return descAngular;
    case 'Vue':
      return descVue;
    default:
      return descAll;
  }
}

const CourseFilterDescription = (props: CourseFilterDescriptionProps) => {
  const desc = getDescriptionFromFilterType(props.selectedFilterType);

  return (
    <div className="course-filter-description-wrapper">
      <h4>{desc}</h4>
    </div>
  );
};

export default CourseFilterDescription;
