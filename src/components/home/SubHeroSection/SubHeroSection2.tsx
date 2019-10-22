import * as React from "react";
import ActionButton from "../../ActionButton/ActionButton";

import './SubHeroSection.css';


interface SubHeroSection2Props {
    onCoursesClick: () => void;
}

function SubHeroSection2(props: SubHeroSection2Props) {

    const actionCoursesTextFull = 'See all available courses';
    // const actionBundlesTextFull = 'See all available bundles';

    const actionCoursesTextMedium = 'See all courses';
    // const actionBundlesTextMedium = 'See all bundles';

    const actionCoursesTextSmall = 'All courses';
    // const actionBundlesTextSmall = 'All bundles';

    return (
        <div className="sub-hero">
            <div className="wrapper">
                <div className="sub-hero-content">

                    <p>
                        You can also select individual courses to make your own NativeScript track.
                    </p>

                    <div className="action-buttons">

                        <div className="action-btn-wrapper">
                            <div className="btn-action blue clear">
                                <a onClick={() => props.onCoursesClick()}>
                                    <span className="action-text-full">{actionCoursesTextFull}</span>
                                    <span className="action-text-medium">{actionCoursesTextMedium}</span>
                                    <span className="action-text-small">{actionCoursesTextSmall}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="sub-detail">
                        These online courses that teach you the developer tools, software practices, and application architecture patterns that you need to master the NativeScript mobile application framework.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default SubHeroSection2;
