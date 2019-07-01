import * as React from "react";
import { scrollToElementById } from "../../../utils/scrolling";
import ActionButton from "../../ActionButton/ActionButton";

import './Hero.css';



function Hero() {

    const goToSpecials = () => scrollToElementById('specials');

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="wrapper">
                    <h2 className="hero-main-title">Turn Up Your NativeScript Training</h2>
                    <p>
                        Upgrade your skills with online courses so you can master the NativeScript framework and build real world native mobile apps using your existing web development skills.
                    </p>

                    <p className="bundle-notice">
                        Complete your knowledge with <a onClick={() => goToSpecials()}>course bundles</a>.
                    </p>
                </div>
            </div>
            <div className="hero-overlay"></div>

        </div>
    );
}

export default Hero;
