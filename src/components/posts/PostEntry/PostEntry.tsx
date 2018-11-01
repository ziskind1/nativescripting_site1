import * as React from 'react';
import { DiscussionEmbed } from 'disqus-react';

let Image = require('gatsby-image').default;
import { Post } from '../../../domain/models/posts/post.model';
import { getAuthorImgSrc } from '../../../utils/urls';
import PostCallToAction from '../PostCallToAction/PostCallToAction';

interface PostEntryProps {
  post: Post;
}

export const PostEntry: React.StatelessComponent<PostEntryProps> = (
  props: PostEntryProps
) => {
  const post = props.post;

  let posterImage = null;
  if (post.image) {
    posterImage = (
      <Image responsiveSizes={post.image.childImageSharp.responsiveSizes} />
    );
  }

  const authorImgSrc = getAuthorImgSrc(post.author.picture);

  const twitterFollowScript = `<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>`;

  const twitterFollowHref = `https://twitter.com/intent/user?screen_name=${
    post.author.twitter
  }`;

  const twitterFollowLink = (
    <a
      href={twitterFollowHref}
      className="twitter-follow-button"
      target="_blank"
      alt="Follow me"
    >
      Follow
    </a>
  );

  const disqusShortname = 'nativescripting';
  const disqusConfig = {
    identifier: post.path,
    title: post.title
  };

  return (
    <div className="post-entry-container">
      <div className="post-header post-inner">
        <div className="post-meta-container">
          <div className="post-meta-author-img-wrapper">
            <img src={authorImgSrc} />
          </div>
          <div className="post-meta-info-wrapper">
            <div>
              <span className="post-meta-author-name">{post.author.name}</span>

              {twitterFollowLink}
            </div>
            <div>
              <span className="post-meta-author-title">
                {post.author.title}
              </span>
            </div>
            <div className="post-meta-date-time-wrapper">
              <span>{post.updatedDate}</span>
              <span className="middot-divider" />
              <span>{post.timeLength}</span>
            </div>
          </div>
        </div>

        <h1>{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>

      {posterImage}

      <div>
        <PostCallToAction />
      </div>

      <div className="post-body">
        <div className="post-inner">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />

          <div className="section-divider">
            <hr className="section-divider" />
          </div>

          <div>
            <i>{post.author.bio}</i>
          </div>
          <div className="post-comments-wrapper">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>

      <div>
        <PostCallToAction />
      </div>
    </div>
  );
};
