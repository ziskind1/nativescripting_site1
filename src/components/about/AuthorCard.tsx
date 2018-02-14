import * as React from "react";
import Link from 'gatsby-link';

import { Author } from "../../domain/models";


interface AuthorCardProps {
    author: Author;
}

export const AuthorCard: React.StatelessComponent<AuthorCardProps> = (props: AuthorCardProps) => {
    const author = props.author;

    const authorImgSrc = `/img/authors/${author.picture}`;
    const twitterLink = `https://twitter.com/${author.twitter}`;
    const gitHubLink = `https://github.com/${author.github}`;

    return (
        <div className="about-author-wrapper">
            <div className="about-author-wrapper-decoration"></div>
            <div className="about-author-img-wrapper">
                <img src={authorImgSrc} className="about-author-img" title={author.name} />
            </div>
            <h3>{author.name}</h3>
            <h4>{author.title}</h4>
            <div className="about-author-bio-wrapper">
                <p dangerouslySetInnerHTML={{ __html: author.biolong }}></p>
            </div>
            <div className="about-author-links">
                <a href={twitterLink} className="about-author-link">
                    <img className="about-author-link-img" src="/img/nativescripting_twitter_icon.svg" />
                </a>
                <a href={gitHubLink} className="about-author-link">
                    <img className="about-author-link-img" src="/img/nativescripting_github_icon.svg" />
                </a>
            </div>
        </div>
    );
};
