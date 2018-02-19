import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle } from '../../../domain/models';
import BundleCardList from '../../home/BundleCard/BundleCardList';

import './CourseBundleArea.css';


export interface CourseBundleAreaProps {
    bundles: Bundle[];
}

export const CourseBundleArea: React.StatelessComponent<CourseBundleAreaProps> = (props: CourseBundleAreaProps) => {

    return (
        <div className="course-bundle-area-container">
            <div>
                <h2>Complete Bundles</h2>
            </div>

            <BundleCardList bundles={props.bundles} />


        </div>
    );
};

