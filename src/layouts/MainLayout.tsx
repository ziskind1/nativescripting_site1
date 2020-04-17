import * as React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/shared/Header/Header';
import { Footer2 } from '../components/shared/Footer/Footer2';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';

import '../../node_modules/normalize.css/normalize.css';
import { AnnouncementBanner } from '../components/shared/AnnouncementBanner/AnnouncementBanner';
import Snackbar, { showSnackbar } from '../components/shared/Snackbar/Snackbar';

//import '../css/styles.css';

let signUpsData: SignUpsDataItem[] = [];

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export interface SignUpsDataItem {
  studentName: string;
  courseName: string;
}

fetch('/data/signups.json')
  .then(resp => resp.json())
  .then((data: SignUpsDataItem[]) => {
    signUpsData = data;

    signUpsData.sort(() => Math.random() - 0.5);

    let currentIndex = 0;

    (function loop() {
      let timeOutMs = getRandomIntInclusive(8000, 40000);
      setTimeout(() => {
        // console.log(timeOutMs);
        if (signUpsData.length > currentIndex) {
          showSnackbar(signUpsData[currentIndex]);
          currentIndex++;
          loop();
        }
      }, timeOutMs);
    })();
  });

export const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
        site {
          siteMetadata {
            siteName
          }
        }

        #get courses
        coursesConnection: allCoursesJson(
          sort: { order: ASC, fields: [order] }
        ) {
          totalCount
          edges {
            node {
              id
              title
              flavors
              url
              label
              authors
              level
              order
              products {
                id
                name
                description
                licensesMin
                licensesMax
                pricereg
                pricesale
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteName={'NativeScript Courses'} data={data} />
        <CountdownTimer />

        <AnnouncementBanner />

        <main role="main">{children}</main>

        <Footer2 />
        <Snackbar />
      </>
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
