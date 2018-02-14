import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle, Course } from '../../../domain/models';
import ActionButton, { ActionBtnType } from '../../ActionButton/ActionButton';
import BundleCourseList from '../BundleCourse/BundleCourseList';

import './BundleCard.css';

export interface BundleCardProps {
    bundle: Bundle;
}

class BundleCard extends React.Component<BundleCardProps, {}> {

    constructor(props: BundleCardProps) {
        super(props);
    }

    public render() {

        const bundle = this.props.bundle;

        let bundleType: ActionBtnType = null;
        switch (bundle.bundleLevel) {
            case 1:
                bundleType = 'primary';
            case 2:
                bundleType = 'secondary';
            case 3:
                bundleType = 'tertiary';
        }

        return (
            <div className="bundle-container">
                <div className="bundle-header">
                    <h3 className="bundle-header-title">{bundle.title}</h3>
                    <p className="bundle-header-subtitle">
                        {bundle.courses.length} courses
                    </p>
                </div>

                <div className="bundle-courses">
                    <BundleCourseList courses={bundle.courses} />
                </div>

                <div className="bundle-bottom">
                    <div className="bundle-license">
                    </div>
                    <div className="bundle-license">
                    </div>
                    <ActionButton text={'buy bundle'} url={bundle.url} type={bundleType} />
                </div>

            </div>
        );
    }
};

export default BundleCard;
