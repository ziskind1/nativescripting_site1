import * as React from 'react';
import Link from 'gatsby-link';
import { Course } from '../../../domain/models';
import { CourseCardList } from '../../CourseCard/CourseCardList';

import './CoursesSection.css';
import { CourseFilter, CourseFilterType } from '../CourseFilter/CourseFilter';
import CourseFilterDescription from '../CourseFilter/CourseFilterDescription';


export interface CoursesSectionProps {
    courses: Course[];
    selectedFilterType: CourseFilterType;
    onSelectFilterType: (filterType: CourseFilterType) => void;
}


const CoursesSection: React.StatelessComponent<CoursesSectionProps> = (props: CoursesSectionProps) => {

    return (
        <section className="section">

            <div className="wrapper">

                <div className="heading">
                    <h2 className="heading__title">Available Courses</h2>
                </div>

                <CourseFilter onSelectFilterType={props.onSelectFilterType} />

                <CourseFilterDescription selectedFilterType={props.selectedFilterType} />

                <CourseCardList courses={props.courses} />

            </div>

        </section>
    );
};



export default CoursesSection;
