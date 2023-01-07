import * as React from "react";
import { Bundle } from "../../../domain/models";
import LevelIcon from "../../LevelIcon/LevelIcon";
import BundleCard from './BundleCard';

import './BundleCardList.css';

export interface BundleCardListProps {
    bundles: Bundle[];
}

const BundleCardList = (props: BundleCardListProps) => {

    const html = props.bundles.map((bundle, idx) => {
        return (
            <BundleCard key={idx} bundle={bundle} />
        );
    });

    return (
        <div className="bundle-card-list">
            {html}
        </div>
    );
};

export default BundleCardList;
