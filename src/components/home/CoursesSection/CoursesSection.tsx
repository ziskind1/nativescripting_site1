import * as React from 'react';
import Link from 'gatsby-link';
import { Course, CourseFlavorType } from '../../../domain/models';
import { CourseCardList } from '../../CourseCardList';
import { FlavorSelector } from '../../FlavorSelector';
import FlavorDescription from '../../FlavorDescription';

import './CoursesSection.css';




export interface CoursesSectionProps {
    courses: Course[];
    selectedFlavor: CourseFlavorType;
    onSelectFlavor: (flavor: CourseFlavorType) => void;
}


const CoursesSection: React.StatelessComponent<CoursesSectionProps> = (props: CoursesSectionProps) => {

    return (
        <div className="courses-section">
            <div className="container">
                <div className="row">
                    <div className="courses-section-header">
                        <h2 className="courses-section-header-title">Available Courses</h2>
                        <p className="courses-section-header-subtitle">
                            Everything you need to master NativeScript
                        </p>

                        <FlavorSelector onSelectFlavor={props.onSelectFlavor} />

                        <FlavorDescription flavor={props.selectedFlavor} />

                    </div>

                    <CourseCardList courses={props.courses} />

                </div>
            </div>
        </div>
    );
};



export default CoursesSection;
