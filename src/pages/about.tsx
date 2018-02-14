import * as React from "react";
import Link from "gatsby-link";

import { AuthorsJsonConnection } from "../domain/graphql-types";
import { authorFromAuthorsJsonEdge } from '../domain/converters';

import { AuthorCardList } from "../components/about/AuthorCardList";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface AboutPageProps {
    data: {
        authorsConnection: AuthorsJsonConnection
    }
}


export default class extends React.Component<AboutPageProps, {}> {

    constructor(props: AboutPageProps) {
        super(props);
    }


    public render() {

        const clearStyle = {
            clear: 'both'
        };

        const authors =
            this.props.data.authorsConnection.edges.map(authorFromAuthorsJsonEdge);

        return (
            <div>
                <div className="pagination">
                    <div className="container">
                        <ul>
                            <li>
                                <a href="/">All Courses</a>
                                <img src="/img/arrow.png" />
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="detail-top-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <img className="logo" src="/img/logo_2.svg" />
                            </div>
                            <div className="col-md-12 text-padding top-text-block">
                                <h2>The most comprehensive NativeScript training</h2>
                                <p>
                                    NativeScripting is a single place for high quality, evergreen, on demand video learning for NativeScript. Created by Alex
                                    Ziskind, who has also authored courses for Pluralsight and LinkedIn, NativeScripting offers
                                    up to date video content that is delivered to the learner quickly, just as the versions of
                                    NativeScript change quickly. This is the single place for top NativeScript experts to share
                                    their knowledge with the world, in video form.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={clearStyle}></div>

                <AuthorCardList authors={authors} />

                <div style={clearStyle}></div>

                <div className="video-container">
                    <div className="container">
                        <div className="row about-row">
                            <div className="col-md-6 col-md-offset-3">

                                <h2>About NativeScripting</h2>

                                <div className="video-wrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3isPtd8Q6rI" frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export const aboutPageQuery = graphql`
query AboutPageQuery{

    #get authors
    authorsConnection: allAuthorsJson(filter: {types: { in: "course" } }) {
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

