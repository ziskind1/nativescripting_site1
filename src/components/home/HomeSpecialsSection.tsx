import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle } from '../../domain/models';
import HomeBundleList from './HomeBundleList';

export interface HomeSpecialsSectionProps {
    bundles: Bundle[];
}


const HomeSpecialsSection: React.StatelessComponent<HomeSpecialsSectionProps> = (props: HomeSpecialsSectionProps) => {

    return (
        <div className="special">
            <a id="specials" name="specials"></a>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2 className="text-header">Special Offers</h2>
                    </div>

                    <div className="for-flex">

                        <HomeBundleList bundles={props.bundles} />

                    </div>
                </div>
            </div>
        </div>
    );
};



export default HomeSpecialsSection;
