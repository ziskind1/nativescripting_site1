import * as React from "react";
import Link from "gatsby-link";
import { ReactNode } from "react";


import '../css/style.css';
import '../css/styles.css';

import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header/Header";


interface IndexLayoutProps {
    children?: any,
    data: {
        site: {
            siteMetadata: {
                siteName: string;
                foo: string;
            };
        };
    };
}


const IndexLayout: React.StatelessComponent<IndexLayoutProps> = ({ children, data }) =>
    <div>
        <Header siteName={data.site.siteMetadata.siteName} />

        {children()}

        <Footer />
    </div>

    ;

export const indexLayoutQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default IndexLayout;
