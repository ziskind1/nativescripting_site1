import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle } from '../../../domain/models';
import BundleCardList from '../BundleCard/BundleCardList';

import './BundleSection.css';

export interface BundleSectionProps {
    bundles: Bundle[];
}


const BundleSection: React.StatelessComponent<BundleSectionProps> = (props: BundleSectionProps) => {

    return (
        <div className="bundle-section">
            <div className="container">
                <div className="row">
                    <div className="bundle-section-header">
                        <h2 className="bundle-section-header-title">Complete Bundles</h2>
                        <p className="bundle-section-header-subtitle">
                            Everything you need to master NativeScript
                        </p>
                    </div>

                    <BundleCardList bundles={props.bundles} />

                </div>
            </div>
        </div>
    );
};



export default BundleSection;
