import * as React from "react";
import { getMenu } from "./MainMenu";


function Footer() {

    const year = new Date().getFullYear();
    const menu = getMenu('footer-right');

    return (
        <div className="footer">
            <div className="container">
                <div className="footer-left">
                    <p>@{year} NativeScripting</p>
                </div>
                {menu}
            </div>
        </div>
    );
}

export default Footer;
