import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { AuthorsJsonConnection } from '../domain/graphql-types';
import { authorFromAuthorsJsonEdge } from '../domain/converters';

import { AuthorCardList } from '../components/about/AuthorCardList';
import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';

import '../css/about.css';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import { Clear } from '../components/shared/Clear';
import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { colors } from '../global/colors';

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
      { name: 'Authors', url: '' }
    ];

    const pageTitle = `Authors | NativeScripting`;

    return (
      <MainLayout>
        <Seo path="/authors" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>



        <div className="wrapper">
          <div className="about-page-container">


            <div className="about-team">
              <h2>Meet the awesome team</h2>
              <h3>behind the most comprehensive NativeScript training</h3>
            </div>

            <Clear />

            <AuthorCardList authors={authors} />

            <Clear />

            <div className="about-team">
              <h2>Join Us</h2>
              <h3>Write about NativeScript!</h3>

              <div style={{ textAlign: 'center' }}>
                <a href="/join-authors" style={{ color: colors.actionGreen1 }}>Inquire here</a>
              </div>


            </div>


            <SignUpSection />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export const authorsPageQuery = graphql`
  query AuthorsPageQuery {
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
