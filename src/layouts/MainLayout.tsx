import * as React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

import '../../node_modules/normalize.css/normalize.css';
import { Footer2 } from '../components/shared/Footer/Footer2';
//import '../css/styles.css';

export const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
          query MainLayoutQuery {
            site {
              siteMetadata {
                siteName
              }
            }
          }
        `}
    render={data => (
      <div>
        <Header siteName={'NativeScript Courses'} />

        <main role="main">{children}</main>

        <Footer2 />
      </div>
    )}
  />
);

/*
export class MainLayout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query MainLayoutQuery {
            site {
              siteMetadata {
                siteName
              }
            }
          }
        `}
        render={data => (
          <div>
            <Header siteName={'NativeScripting'} />

            <main role="main">{children}</main>

            <Footer />
          </div>
        )}
      />
    );
  }
}
*/

/*
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
*/
