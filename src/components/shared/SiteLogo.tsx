import * as React from "react";

import { withPrefix } from 'gatsby-link';

const logoSrc = withPrefix('/img/logo_full.svg');

interface SiteLogoProps {
    siteName: string;
}

function SiteLogo(props: SiteLogoProps) {
    return (
        <a href="/">
            <img src={logoSrc} alt={props.siteName} />
        </a>
    );
}

export default SiteLogo;
