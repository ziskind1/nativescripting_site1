import * as React from "react";
import ActionButton from "../../ActionButton/ActionButton";

import './SubHeroSection.css';


function SubHeroSection() {

    const actionFreeText = 'Start with our free courses';


    return (
        <div className="sub-hero">
            <div className="wrapper">
                <div className="sub-hero-content">

                    <p>
                        Start with our free beginner courses and continue to our more advanced premium courses in both NativeScript Core and NativeScript with Angular.
                    </p>


                    <div>
                        <div className="action-btn-wrapper">
                            <ActionButton text={actionFreeText} url={'/course/'} />
                        </div>
                        <button>
                            Start with our free courses
                        </button>

                        <button>
                            Dive deeper with premium courses
                        </button>
                    </div>

                    <p>
                        These online courses that teach you the developer tools, software practices, and application architecture patterns that you need to master the NativeScript mobile application framework.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SubHeroSection;
