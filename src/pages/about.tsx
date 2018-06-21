import * as React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

import { AuthorsJsonConnection } from "../domain/graphql-types";
import { authorFromAuthorsJsonEdge } from "../domain/converters";

import { AuthorCardList } from "../components/about/AuthorCardList";
import { BreadCrumbs } from "../components/shared/BreadCrumbs/BreadCrumbs";

import "../css/about.css";

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
    const clearStyle = {
      clear: "both"
    };

    const authors = this.props.data.authorsConnection.edges.map(
      authorFromAuthorsJsonEdge
    );

    const breadCrumbs = [
      { name: "All courses", url: "/" },
      { name: "About", url: "" }
    ];

    const pageTitle = `About | NativeScripting`;

    return (
      <div className="wrapper">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <div className="about-page-container">
          <div className="breadcrumb-wrapper">
            <BreadCrumbs breadcrumbs={breadCrumbs} />
          </div>

          <div className="about-top-block">
            <h2>The most comprehensive NativeScript training</h2>
            <p>
              NativeScripting is a single place for high quality, evergreen, on
              demand video learning for NativeScript. Created by Alex Ziskind,
              who has also authored courses for Pluralsight and LinkedIn,
              NativeScripting offers up to date video content that is delivered
              to the learner quickly, just as the versions of NativeScript
              change quickly. This is the single place for top NativeScript
              experts to share their knowledge with the world, in video form.
            </p>
          </div>

          <div style={clearStyle} />

          <AuthorCardList authors={authors} />

          <div style={clearStyle} />

          <div className="video-container">
            <div className="about-row">
              <h2>About NativeScripting</h2>

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
        </div>
      </div>
    );
  }
}

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    #get authors
    authorsConnection: allAuthorsJson(filter: { types: { in: "course" } }) {
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
