import * as React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/shared/Header/Header';
import { Footer2 } from '../components/shared/Footer/Footer2';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';

import '../../node_modules/normalize.css/normalize.css';
import { AnnouncementBanner } from '../components/shared/AnnouncementBanner/AnnouncementBanner';


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
      <div id="ns-outer">



        <div id="ns-inner">

          <Header siteName={'NativeScript Courses'} />

          <CountdownTimer />
          <AnnouncementBanner />


          <main role="main">{children}</main>

          <Footer2 />

        </div>
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
