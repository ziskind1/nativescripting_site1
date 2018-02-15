import * as React from "react";

import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="wrapper">
                    <h2 className="hero-main-title">Turn up your NativeScript training</h2>
                    <p>
                        Are you ready to start learning NativeScript? Get the FREE getting started guides for NativeScript Core and NativeScript
                        with Angular.
                        </p>
                    <p>
                        Do you already know the basics and want to go deeper? Our NativeScript Pro courses will take you to a finished and polished
                        product that you can launch in the app stores. Courses can be purchased on-demand, or save money
                        with our bundles! Only 100 of each bundle are made available for the special pre-launch price.
                    <br />Grab them while we have them.
                </p>
                </div>
            </div>
            <div className="hero-overlay"></div>

        </div>
    );
}

export default Hero;
