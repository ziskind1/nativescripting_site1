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
        <section className="section">
            <div className="wrapper">
                <a id="specials"></a>
                <div className="heading">
                    <h2 className="heading__title">Complete Bundles</h2>
                    <p className="heading__text">
                        Everything you need to master NativeScript
                                </p>
                </div>

                <BundleCardList bundles={props.bundles} />


            </div>
        </section>
    );
};



export default BundleSection;
