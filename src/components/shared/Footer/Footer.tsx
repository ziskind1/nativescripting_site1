import * as React from "react";
import { getMenu } from "../MainMenu";

import './Footer.css';

function Footer() {

    const year = new Date().getFullYear();
    const menu = getMenu('');

    return (
        <div className="wrapper">
            <div className="footer-container">
                <div>
                    <p>@{year} NativeScripting</p>
                </div>
                <div>
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default Footer;
