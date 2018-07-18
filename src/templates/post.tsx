import * as React from 'react';
import { Helmet } from 'react-helmet';
import { MarkdownRemark, AuthorsJsonConnection } from '../domain/graphql-types';
import { postFromMarkdownRemark } from '../domain/converters/post-types';
import { authorFromAuthorsJsonEdge } from '../domain/converters';
import { PostEntry } from '../components/posts/PostEntry/PostEntry';
import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';

import 'prismjs/themes/prism-okaidia.css';
import '../css/post-single.css';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';

interface PostPageProps {
  data: {
    authorsConnection: AuthorsJsonConnection;
    mdRemark: MarkdownRemark;
  };
}

const PostTemplate: React.StatelessComponent<PostPageProps> = (
  props: PostPageProps
) => {
  const authors = props.data.authorsConnection.edges.map(
    authorFromAuthorsJsonEdge
  );

  const post = postFromMarkdownRemark(props.data.mdRemark, authors);

  const breadCrumbs = [
    { name: 'Courses', url: '/' },
    { name: 'Posts', url: '/posts' },
    { name: 'Current post', url: '' }
  ];

  const pageTitle = `${post.title} | NativeScripting`;

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <CountdownTimer />

      <div className="wrapper">
        <div className="breadcrumb-wrapper">
          <BreadCrumbs breadcrumbs={breadCrumbs} />
        </div>
      </div>

      <PostEntry post={post} />

      <SignUpSection />

      <AddThisBlock />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    #get authors
    authorsConnection: allAuthorsJson(filter: { types: { in: "post" } }) {
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

    # get post
    mdRemark: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      timeToRead
      excerpt
      html
      frontmatter {
        title
        path
        author
        updatedDate(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            responsiveSizes(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
