import * as React from 'react';
import { Bundle } from '../../../domain/models';
import BundleCardList from '../../home/BundleCard/BundleCardList';

import './CourseBundleArea.css';

export interface CourseBundleAreaProps {
  bundles: Bundle[];
}

export const CourseBundleArea: React.StatelessComponent<
  CourseBundleAreaProps
> = (props: CourseBundleAreaProps) => {
  return (
    <div className="course-bundle-area-container">
      <h2>Complete Bundles</h2>

      <BundleCardList bundles={props.bundles} />
    </div>
  );
};
