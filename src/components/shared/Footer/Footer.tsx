import * as React from "react";
import { getMenu } from "../MainMenu";

import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const menu = getMenu("");

  return (
    <div className="wrapper">
      <div className="footer-container">
        <div>@{year} NativeScripting</div>
        <div className="privacy-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div>{menu}</div>
      </div>
    </div>
  );
}

export default Footer;
