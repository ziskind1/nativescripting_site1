import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { authorFromAuthorsJsonEdge } from '../domain/converters';


import '../css/about.css';

import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import { Clear } from '../components/shared/Clear';
import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { PageHeadingMain } from '../components/shared/PageHeaders';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface AboutPageProps {
  data: {
    authorsConnection: Queries.AuthorsJsonConnection;
  };
}

export default class extends React.Component<AboutPageProps, {}> {
  constructor(props: AboutPageProps) {
    super(props);
  }

  public render() {
    const authors = this.props.data.authorsConnection.edges.map(
      authorFromAuthorsJsonEdge
    );

    const breadCrumbs = [
      { name: 'All courses', url: '/' },
      { name: 'About', url: '' }
    ];

    const pageTitle = `About | NativeScripting`;

    return (
      <MainLayout>
        <Seo path="/about" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>



        <div className="wrapper">
          <div className="about-page-container">


            <div className="video-container">
              <div className="about-top-block">
                <PageHeadingMain center>About the most comprehensive NativeScript training</PageHeadingMain>

                <p>
                  NativeScripting is a single place for high quality,
                  evergreen, on demand video learning for NativeScript.
                  Created by Alex Ziskind, who has also authored courses for
                  Pluralsight and LinkedIn, NativeScripting offers up to date
                  video content that is delivered to the learner quickly, just
                  as the versions of NativeScript change quickly. This is the
                  single place for top NativeScript experts to share their
                  knowledge with the world, in video form.
                  </p>


                <div className="video-wrapper">
                  <iframe
                    width="640"
                    height="360"
                    src="https://player.vimeo.com/video/315987685"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <SignUpSection />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    #get authors
    authorsConnection: allAuthorsJson {
      totalCount
      edges {
        node {
          id
          title
          name
          picture
          bio
          biolong
          twitter
          github
          contentTypes
        }
      }
    }
  }
`;
