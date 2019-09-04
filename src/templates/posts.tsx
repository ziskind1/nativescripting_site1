import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import {
  AuthorsJsonConnection,
  MarkdownRemarkConnection
} from '../domain/graphql-types';
import { Author } from '../domain/models';
import { authorFromAuthorsJsonEdge } from '../domain/converters';
import { postFromMarkdownRemark } from '../domain/converters/post-types';
import { MainLayout } from '../layouts/MainLayout';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';
import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';
import { PostsSection } from '../components/posts/PostsSection/PostsSection';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import { Pagination } from '../components/posts/Pagination/Pagination';

import '../css/posts.css';
import { Seo } from '../components/shared/Seo/Seo';

interface PostsIndexPageProps {
  data: {
    authorsConnection: AuthorsJsonConnection;
    markdownConnection: MarkdownRemarkConnection;
  };
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class PostsPage extends React.Component<PostsIndexPageProps> {
  private authors: Author[] = [];

  constructor(props: PostsIndexPageProps) {
    super(props);

    this.authors = this.props.data.authorsConnection.edges.map(
      authorFromAuthorsJsonEdge
    );
  }

  public render() {
    const { currentPage, totalPages } = this.props.pageContext;
    const { edges, totalCount } = this.props.data.markdownConnection;

    const posts = edges.map(e => postFromMarkdownRemark(e.node, this.authors));

    const breadCrumbs = [
      { name: 'All courses', url: '/' },
      { name: 'Posts', url: '' }
    ];

    const pageTitle = `Posts | NativeScripting`;

    return (
      <MainLayout>
        <Seo path="/posts" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <CountdownTimer />

        <div className="wrapper">
          <div className="posts-container">
            <div className="breadcrumb-wrapper">
              <BreadCrumbs breadcrumbs={breadCrumbs} />
            </div>

            <PostsSection posts={posts} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              url={'posts'}
            />
          </div>

          <SignUpSection />

          <AddThisBlock />
        </div>
      </MainLayout>
    );
  }
}
export const PostsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
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

    #get posts
    markdownConnection: allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            path
            author
            updatedDate(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1000) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
