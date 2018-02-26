import * as React from "react";

import { withPrefix } from 'gatsby-link';

const logoSrc = withPrefix('/img/logo_full.svg');
const logoIconSrc = withPrefix('/img/logo_full_icon.svg');

interface SiteLogoProps {
    siteName: string;
}

function SiteLogo(props: SiteLogoProps) {
    return (
        <a href="/">
            <img className="site-logo-img" src={logoSrc} alt={props.siteName} />
            <img className="site-logo-icon-img" src={logoIconSrc} alt={props.siteName} />
        </a>
    );
}

export default SiteLogo;
