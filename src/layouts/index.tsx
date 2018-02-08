import * as React from "react";
import Link from "gatsby-link";
import { ReactNode } from "react";


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
        <Link to={`/`}>
            <h3>
                {data.site.siteMetadata.siteName}
            </h3>
        </Link>
        <Link to={`/about/`}>
            About
    </Link>
        {children()}
    </div>;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export default IndexLayout;
