import * as React from 'react';
//import { CourseFlavorType } from "../../../domain/models";

import './CourseFilter.css';
import { Link } from 'gatsby';

export type CourseFilterType = 'All' | 'Free' | 'Core' | 'Angular' | 'Vue';

const allFilterOptions: CourseFilterType[] = [
  'All',
  'Free',
  'Core',
  'Angular',
  'Vue'
];

interface CourseFilterProps {
  selectedFilterType: CourseFilterType;
  onSelectFilterType: (option: CourseFilterType) => void;
}

function getFilterOptionsHtml(
  allOptions: CourseFilterType[],
  selectedFilterType: CourseFilterType,
  selectFilterOption: (option: CourseFilterType) => Promise<void>
): JSX.Element[] {
  return allOptions.map((o, idx) => {
    const optionClassName =
      o === selectedFilterType ? 'active noselect' : 'noselect';

    const linkTo = `/courses/${o.toLowerCase()}`;

    return (
      <li key={idx}>
        <Link to={linkTo} className={optionClassName}>
          {o}
        </Link>
      </li>
    );
  });
}

export const CourseFilter: React.StatelessComponent<CourseFilterProps> = (
  props: CourseFilterProps
) => {
  function selectFilterOption<T>(option: CourseFilterType): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      props.onSelectFilterType(option);
      resolve();
    });
  }

  const optionsHtml = getFilterOptionsHtml(
    allFilterOptions,
    props.selectedFilterType,
    (option: CourseFilterType) => {
      return selectFilterOption(option);
    }
  );

  return (
    <div className="course-filter-wrapper">
      <ul>{optionsHtml}</ul>
    </div>
  );
};
