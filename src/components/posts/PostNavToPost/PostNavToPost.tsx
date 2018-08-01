import * as React from 'react';
import Link from 'gatsby-link';
import { Post } from '../../../domain/models/posts/post.model';

import './PostNavToPost.css';

interface PostNavToPostProps {
  prefix: string;
  post: Post;
}

export const PostNavToPost: React.StatelessComponent<PostNavToPostProps> = (
  props: PostNavToPostProps
) => {
  const post = props.post;

  if (post) {
    return (
      <div className="post-nav-item-wrapper">
        <div className="">
          <div>
            <Link to={post.path}>
              <h2>
                <strong>{props.prefix}:</strong> {post.title}
              </h2>
              <p className="zoom">{post.excerpt}</p>
              <p>Read more...</p>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
