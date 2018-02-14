import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle } from '../../domain/models';
import HomeBundleCard from './HomeBundleCard';


export interface HomeBundleListProps {
    bundles: Bundle[];
}


class HomeBundleList extends React.Component<HomeBundleListProps, {}> {

    constructor(props: HomeBundleListProps) {
        super(props);
    }

    public render() {

        const html = this.props.bundles.map((bundle: Bundle, idx: number) => {
            return (
                <HomeBundleCard key={idx} bundle={bundle} />
            );
        });

        return (
            <div>
                {html}
            </div>
        );
    }

};

export default HomeBundleList;
