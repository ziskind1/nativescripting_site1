import * as React from "react";
import { Helmet } from "react-helmet";

import "../css/404.css";
import { MainLayout } from "../layouts/MainLayout";

function FourOhFour() {
  const actionGoDeepTextFull = "Awesome courses right this way";
  const actionGoDeepTextMedium = "Awesome courses";
  const actionGoDeepTextSmall = "Our courses";

  const pageTitle = `Page not Found | NativeScripting`;

  return (
    <MainLayout>
      <div className="hero">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <div className="hero-content">
          <div className="wrapper">
            <h2 className="hero-main-title">
              Turn up your NativeScript training to 404
          </h2>
            <p>But first, you need to find the right place.</p>

            <p className="bundle-notice">
              You are likely looking for our amazing NativeScript courses, which
            can be found <a href="/">here</a>.
          </p>

            <div className="action-btn-container">
              <div className="action-btn-wrapper">
                <div className="btn-action blue clear">
                  <a href="/">
                    <span className="action-text-full">
                      {actionGoDeepTextFull}
                    </span>
                    <span className="action-text-medium">
                      {actionGoDeepTextMedium}
                    </span>
                    <span className="action-text-small">
                      {actionGoDeepTextSmall}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-overlay" />
      </div>
    </MainLayout>
  );
}

export default FourOhFour;
