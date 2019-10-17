import * as React from 'react';
import { Link } from 'gatsby';

import { getMenu } from '../MainMenu';

import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const menu = getMenu('');

  return (
    <div className="wrapper">
      <div className="footer-container">
        <div>@{year} NativeScripting</div>
        <div className="privacy-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/licencing">Licencing Agreement</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div>{menu}</div>
      </div>
    </div>
  );
}

export default Footer;
