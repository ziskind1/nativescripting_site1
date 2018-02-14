import * as React from 'react';
import Link from 'gatsby-link';
import { Bundle, Course } from '../../domain/models';
import { HomeBundleCourseSummaryList } from './HomeBundleCourseSummaryList';
import HomeBundleProduct from './HomeBundleProduct';


export interface HomeBundleCardProps {
    bundle: Bundle;
}


class HomeBundleCard extends React.Component<HomeBundleCardProps, {}> {

    constructor(props: HomeBundleCardProps) {
        super(props);
    }

    public render() {

        const bundle = this.props.bundle;
        const courses: Course[] = [];

        const numLeftHtml = bundle.promoremaining > 0 ?
            <div className="top-price">
                <span>{bundle.promoremaining}</span>/
       <span>{bundle.promototal}</span>&nbsp;left at this price</div>
            : null;

        const productSingle = bundle.products.find(p => p.licensesMin === 1);

        return (

            <div className="bundle-card" data-bind="css: { 'supreme-bundle': bundleLevel === 2, 'ultimate-bundle': bundleLevel === 3, 'select-bundle': bundleSelected }">

                {numLeftHtml}

                <div className="border-top"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
                <div className="top-block" data-bind="css: { 'included-active': coursesShowing }">
                    <div className="included" data-bind="click: toggleCoursesShowing">
                        <span>{bundle.title}</span> &nbsp;courses included
                        <img src="/img/arrow.png" />
                    </div>
                    <h2>{bundle.title}</h2>
                    <p>{bundle.subtitle}</p>

                    <HomeBundleCourseSummaryList courses={courses} />

                    <div className="error" data-ko-ignore data-ko-keep data-bind="css: { 'error-active': showMessage }">
                        <span>Please select the number of users</span>
                    </div>
                </div>
                <div className="medium-block" data-ko-ignore data-ko-keep data-bind="css: { 'medium-block-active': showMessage }">
                    <div className="medium-border-left"></div>
                    <div className="medium-border-right"></div>
                    <div className="medium-border-top"></div>
                    <div className="glow-border"></div>

                    <HomeBundleProduct product={productSingle} />

                    <div className="teams" data-ko-ignore data-ko-keep data-bind="click: toggleTeamSelecting, css: { 'team-list-active': teamSelected, 'teams-active': teamSelecting }">
                        <p className="team">team
                            <img src="/img/arrow.png" />
                        </p>


                    </div>
                </div>
                <div className="bottom">
                    <a data-ko-ignore data-ko-keep data-bind="click: buyBundle">
                        <span>Buy Bundle</span>
                    </a>
                </div>
            </div>

        );
    }

};

export default HomeBundleCard;
