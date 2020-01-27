import * as React from "react";
import { Link } from "gatsby";
import ActionButton from "../../ActionButton/ActionButton";

import './SubHeroSection.css';



interface SubHeroSection3Props {
    // onCoursesClick: () => void;
}

function SubHeroSection3(props: SubHeroSection3Props) {

    const actionCoursesTextFull = 'Join the FREE training webinar';
    // const actionBundlesTextFull = 'See all available bundles';

    const actionCoursesTextMedium = 'Free training webinar';
    // const actionBundlesTextMedium = 'See all bundles';

    const actionCoursesTextSmall = 'Free training webinar';
    // const actionBundlesTextSmall = 'All bundles';

    return (
        <div className="sub-hero">
            <div className="wrapper">
                <div className="sub-hero-content">

                

                    <div className="action-buttons">

                        <div className="action-btn-wrapper">
                            <div className="btn-action blue clear">
                                <Link to="/pro-webinar">
                                    <span className="action-text-full">{actionCoursesTextFull}</span>
                                    <span className="action-text-medium">{actionCoursesTextMedium}</span>
                                    <span className="action-text-small">{actionCoursesTextSmall}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeroSection3;
