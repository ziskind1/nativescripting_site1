import * as React from "react";
import ActionButton from "../../ActionButton/ActionButton";

import './SubHeroSection.css';


function SubHeroSection() {

    const actionFreeTextFull = 'Start with our free courses';
    const actionGoDeepTextFull = 'Go deep with premium courses';

    const actionFreeTextMedium = 'Start with free courses';
    const actionGoDeepTextMedium = 'Deeper premium courses';

    const actionFreeTextSmall = 'Free courses';
    const actionGoDeepTextSmall = 'Premium courses';

    return (
        <div className="sub-hero">
            <div className="wrapper">
                <div className="sub-hero-content">

                    <p>
                        Start with our <span className="green">free beginner courses</span> and continue to our more <span className="blue">advanced premium courses</span> in both NativeScript Core and NativeScript with Angular.
                    </p>

                    <div className="action-buttons">
                        <div className="action-btn-wrapper">
                            <div className="btn-action green">
                                <a>
                                    <span className="action-text-full">{actionFreeTextFull}</span>
                                    <span className="action-text-medium">{actionFreeTextMedium}</span>
                                    <span className="action-text-small">{actionFreeTextSmall}</span>
                                </a>
                            </div>
                        </div>

                        <div className="action-btn-wrapper">
                            <div className="btn-action blue clear">
                                <a>
                                    <span className="action-text-full">{actionGoDeepTextFull}</span>
                                    <span className="action-text-medium">{actionGoDeepTextMedium}</span>
                                    <span className="action-text-small">{actionGoDeepTextSmall}</span>
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

export default SubHeroSection;
