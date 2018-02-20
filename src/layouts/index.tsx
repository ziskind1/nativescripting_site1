import * as React from "react";
import Link from "gatsby-link";
import { ReactNode } from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";


import '../../node_modules/normalize.css/normalize.css';
import '../css/styles.css';


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

        <main role="main">
            {children()}
        </main>

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
