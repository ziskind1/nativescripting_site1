import * as React from "react";
import { scrollToElementById } from "../../../utils/scrolling";
import ActionButton from "../../ActionButton/ActionButton";
import styled from 'styled-components';

import './Hero.css';



function Hero() {

    const goToSpecials = () => scrollToElementById('specials');

    const MainTitle = styled.h1``;

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="wrapper">
                    <MainTitle className="hero-main-title">Master NativeScript</MainTitle>
                    <p>
                        Upgrade your skills with online courses so you can master the NativeScript framework and build real world native mobile apps using your existing web development skills.
                    </p>

                </div>
            </div>
            <div className="hero-overlay"></div>

        </div>
    );
}

export default Hero;
