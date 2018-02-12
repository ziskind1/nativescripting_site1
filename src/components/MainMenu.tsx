import * as React from "react";


export function MainMenuMobile() {
    return (
        <div className="mobile-header">
            <a data-z-url-fix href="/training">Training</a>
            <a data-z-url-fix href="/about">About</a>
            <a href="https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1" className="sign">Login</a>
        </div>
    );
}

export function MainMenu() {
    return (
        <div className="header-page">
            <a data-z-url-fix href="/training">Training</a>
            <a data-z-url-fix href="/about">About</a>
            <a href="https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1" className="sign">Login</a>
        </div>
    );
}
