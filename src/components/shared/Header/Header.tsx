import * as React from "react";

import SiteLogo from '../SiteLogo';
import Burger from "../Burger";
import { MainMenuMobile, MainMenu } from "../MainMenu";

import './Header.css';

interface HeaderProps {
    siteName: string;
}

function Header(props: HeaderProps) {


    return (
        <div className="site-header">
            <div className="header-logo-container">
                <SiteLogo siteName={props.siteName} />
            </div>

            <div className="header-nav-container">
                <a href={'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'} className="sign">Login</a>
            </div>

        </div>
    );
}

export default Header;
