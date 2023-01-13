import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

import { Author } from '../domain/models';
import { authorFromAuthorsJsonEdge } from '../domain/converters';
import { postFromMarkdownRemark } from '../domain/converters/post-types';
import { MainLayout } from '../layouts/MainLayout';

import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';
import { PostsSection } from '../components/posts/PostsSection/PostsSection';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import { Pagination } from '../components/posts/Pagination/Pagination';

import '../css/posts.css';
import { Seo } from '../components/shared/Seo/Seo';

interface PostsIndexPageProps {
  data: {
    authorsConnection: Queries.AuthorsJsonConnection;
    markdownConnection: Queries.MarkdownRemarkConnection;
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

    const pageTitle = `Articles | NativeScript Courses`;

    return (
      <MainLayout>
        <Seo path="/posts" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>


        <div className="wrapper">
          <div className="posts-container">


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
  query PostsPageQuery($skip: Int!, $limit: Int!) {
    #get authors
    authorsConnection: allAuthorsJson(filter: {contentTypes: {in: "post"}}) {
      totalCount
      edges {
        node {
          authorId
          title
          name
          picture
          bio
          biolong
          twitter
          github
          contentTypes
        }
      }
    }

    #get posts
    markdownConnection: allMarkdownRemark(
      filter: {frontmatter: {draft: {ne: true}}}
      sort: {frontmatter: {updatedDate: DESC}}
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
