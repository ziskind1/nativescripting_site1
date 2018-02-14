import * as React from "react";
import Link from "gatsby-link";
import { ReactNode } from "react";


import '../css/style.css';
import Footer from "../components/Footer";
import Header from "../components/Header";


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
/*

export default class extends React.Component<IndexLayoutProps, {}> {
    constructor(props: IndexLayoutProps, context: any) {
        super(props, context);
        
    }
    public render() {
        return (
            <div>
                <h1>Hello Typescript world!</h1>
                <p>This site is named <strong>{this.props.data.site.siteMetadata.foo}</strong></p>
            </div>
        );
    }
}
*/

const IndexLayout: React.StatelessComponent<IndexLayoutProps> = ({ children, data }) =>
    <div>
        <div className="container-fluid">
            <div className="row">
                <Header siteName={data.site.siteMetadata.siteName} />
            </div>
        </div>

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
