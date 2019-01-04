import * as React from 'react';
import { graphql } from "gatsby";

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
import { PostNavToPost } from '../components/posts/PostNavToPost/PostNavToPost';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/shared/Seo/Seo';

interface PostPageProps {
  data: {
    authorsConnection: AuthorsJsonConnection;
    mdRemark: MarkdownRemark;
    mdRemarkPrev: MarkdownRemark;
    mdRemarkNext: MarkdownRemark;
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

  const postPrev = postFromMarkdownRemark(props.data.mdRemarkPrev, authors);
  const postNext = postFromMarkdownRemark(props.data.mdRemarkNext, authors);

  return (
    <MainLayout>
      <SEO postNode={props.data.mdRemark} post={post} postSEO />
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

      <div className="wrapper">
        <div className="post-nav-container">
          <PostNavToPost prefix="Previous" post={postPrev} />
          <PostNavToPost prefix="Next" post={postNext} />
        </div>
      </div>

      <SignUpSection />

      <AddThisBlock />
    </MainLayout>
  );
};

export const query = graphql`
  query BlogPostQuery(
    $slug: String!
    $prevPostPath: String!
    $nextPostPath: String!
  ) {
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
            sizes(maxWidth: 1000) {
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

    #get prev post
    mdRemarkPrev: markdownRemark(frontmatter: { path: { eq: $prevPostPath } }) {
      id
      timeToRead
      excerpt
      frontmatter {
        title
        path
        author
        updatedDate(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 1000) {
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

    #get next post
    mdRemarkNext: markdownRemark(frontmatter: { path: { eq: $nextPostPath } }) {
      id
      timeToRead
      excerpt
      frontmatter {
        title
        path
        author
        updatedDate(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            sizes(maxWidth: 1000) {
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
