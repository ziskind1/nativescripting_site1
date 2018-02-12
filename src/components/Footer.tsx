import * as React from "react";


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-left">
                    <p>@2017 NativeScripting</p>
                </div>
                <div className="footer-right">

                    <a data-z-url-fix href="/training">Training</a>
                    <a data-z-url-fix href="/about">About</a>
                    <a href="https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1" className="sign">Login</a>

                </div>
            </div>
        </div>
    );
}

export default Footer;
