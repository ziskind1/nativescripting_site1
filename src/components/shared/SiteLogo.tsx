import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

const logoSrc = withPrefix('/img/logo_full.svg');
const logoIconSrc = withPrefix('/img/logo_full_icon.svg');

interface SiteLogoProps {
  siteName: string;
}

function SiteLogo(props: SiteLogoProps) {
  return (
    <Link to="/">
      <img alt={props.siteName} className="site-logo-img" src={logoSrc} />
      <img alt={props.siteName}
        className="site-logo-icon-img"
        src={logoIconSrc}

      />
    </Link>
  );
}

export default SiteLogo;
