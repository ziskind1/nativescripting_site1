import * as React from 'react';
import { graphql } from "gatsby";
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

import { AuthorsJsonConnection } from '../domain/graphql-types';
import { authorFromAuthorsJsonEdge } from '../domain/converters';

import { AuthorCardList } from '../components/about/AuthorCardList';
import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';

import '../css/about.css';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import { Clear } from '../components/shared/Clear';
import { MainLayout } from '../layouts/MainLayout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface AboutPageProps {
  data: {
    authorsConnection: AuthorsJsonConnection;
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
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <CountdownTimer />

        <div className="wrapper">
          <div className="about-page-container">
            <div className="breadcrumb-wrapper">
              <BreadCrumbs breadcrumbs={breadCrumbs} />
            </div>

            <div className="about-team">
              <h2>Meet the awesome team behind</h2>
              <h3>the most comprehensive NativeScript training</h3>
            </div>

            <Clear />

            <AuthorCardList authors={authors} />

            <Clear />

            <div className="video-container">
              <div className="about-row about-top-block">
                <h2>About the most comprehensive NativeScript training</h2>

                <div className="wrapper">
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
                </div>

                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3isPtd8Q6rI"
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
        }
      }
    }
  }
`;
