import * as React from 'react';
import { Link } from 'gatsby';

import SiteLogo from '../SiteLogo';
import { HeaderMenuMobile } from '../HeaderMenu/HeaderMenuMobile';

import './Header.css';


interface HeaderProps {
  siteName: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-logo-container">
        <SiteLogo siteName={props.siteName} />
      </div>



      <nav className="header-nav-container">

        <HeaderMenuMobile></HeaderMenuMobile>

        <div className="desktop-nav">
          <Link to="/posts">Articles</Link>
          <Link to="/authors" className="secondary-link">Authors</Link>
          <Link to="/pro-webinar" className="secondary-link">Free Webinar</Link>

          <a href='https://nativescript.training'>Live Training</a>
          <a
            href={
              'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'
            }
            className="sign"
          >
            Login
        </a>
        </div>

      </nav>

    </header>
  );
}

export default Header;
