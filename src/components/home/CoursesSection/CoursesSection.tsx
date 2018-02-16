import * as React from 'react';
import Link from 'gatsby-link';
import { Course, CourseFlavorType } from '../../../domain/models';
import { CourseCardList } from '../../CourseCard/CourseCardList';
import { FlavorSelector } from '../../FlavorSelector';
import FlavorDescription from '../../FlavorDescription';

import './CoursesSection.css';
import { CourseFilter, CourseFilterType } from '../CourseFilter/CourseFilter';


export interface CoursesSectionProps {
    courses: Course[];
    selectedFlavor: CourseFlavorType;
    onSelectFlavor: (flavor: CourseFlavorType) => void;
    onSelectFilterType: (filterType: CourseFilterType) => void;
}


const CoursesSection: React.StatelessComponent<CoursesSectionProps> = (props: CoursesSectionProps) => {

    return (
        <section className="section">

            <div className="wrapper">

                <div className="heading">
                    <h2 className="heading__title">Available Courses</h2>
                    <p className="heading__text">
                        Everything you need to master NativeScript
                    </p>
                </div>

                <CourseFilter onSelectFilterType={props.onSelectFilterType} />

                <FlavorSelector onSelectFlavor={props.onSelectFlavor} />
                <FlavorDescription flavor={props.selectedFlavor} />

                <CourseCardList courses={props.courses} />

            </div>

        </section>
    );
};



export default CoursesSection;
