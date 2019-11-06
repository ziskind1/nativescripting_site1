import * as React from 'react';

import { Author } from '../../domain/models';
import { getAuthorImgSrc } from '../../utils/urls';

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard: React.StatelessComponent<AuthorCardProps> = (
  props: AuthorCardProps
) => {
  const author = props.author;

  //const authorImgSrc = `/img/authors/${author.picture}`;
  const authorImgSrc = getAuthorImgSrc(author.picture, 100);

  const twitterLink = `https://twitter.com/${author.twitter}`;
  const gitHubLink = `https://github.com/${author.github}`;

  return (
    <div className="about-author-wrapper">
      <div className="about-author-wrapper-decoration" />
      <div className="about-author-img-wrapper">
        <img alt={author.name}
          src={authorImgSrc}
          className="about-author-img"
          title={author.name}
        />
      </div>
      <h3>{author.name}</h3>
      <h4>{author.title}</h4>
      <div className="about-author-bio-wrapper">
        <p dangerouslySetInnerHTML={{ __html: author.biolong }} />
      </div>
      <div className="about-author-links">
        <a href={twitterLink} className="about-author-link">
          <img alt="Twitter icon"
            className="about-author-link-img"
            src="/img/nativescripting_twitter_icon.svg"
          />
        </a>
        <a href={gitHubLink} className="about-author-link">
          <img alt="GitHub icon"
            className="about-author-link-img"
            src="/img/nativescripting_github_icon.svg"
          />
        </a>
      </div>
    </div>
  );
};
