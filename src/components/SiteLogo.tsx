import * as React from "react";

import { withPrefix } from 'gatsby-link';

const logoSrc = withPrefix('/img/logo_full.svg');

function SiteLogo() {
    return (
        <a href="/">
            <img src={logoSrc} alt="Logo" />
        </a>
    );
}

export default SiteLogo;
