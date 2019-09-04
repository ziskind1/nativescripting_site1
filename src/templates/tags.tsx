import * as React from 'react';
import { Link } from 'gatsby';

const Tags: React.StatelessComponent<{ pageContext: any }> = ({
  pageContext
}) => {
  const { posts, post, tag } = pageContext;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map((p: any) => {
            const id = p.id;
            const frontmatter = p.frontmatter;
            const excerpt = p.excerpt;

            return (
              <li key={id}>
                <h1>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h1>
                <p>{excerpt}</p>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">All tags</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">All posts</Link>
    </div>
  );
};

export default Tags;
