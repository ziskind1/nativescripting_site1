import * as React from 'react';
import { Link } from 'gatsby';

import SiteLogo from '../SiteLogo';

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
        <Link to="/posts">Articles</Link>
        <Link to="/authors" className="secondary-link">Authors</Link>
        <Link to="/faq" className="secondary-link">
          FAQ
        </Link>
        <a
          href={
            'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'
          }
          className="sign"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
