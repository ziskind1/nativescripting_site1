import * as React from "react";

import SiteLogo from './SiteLogo';
import Burger from "./Burger";
import { MainMenuMobile, MainMenu } from "./MainMenu";

interface HeaderProps {
    siteName: string;
}

function Header(props: HeaderProps) {
    return (
        <div className="header">

            <MainMenuMobile />

            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <SiteLogo siteName={props.siteName} />
                        <MainMenu />
                        <Burger />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
