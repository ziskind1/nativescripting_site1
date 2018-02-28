import * as React from "react";
let Image = require("gatsby-image").default;
import {
    MarkdownRemarkConnection,
    ImageSharp,
    AuthorsJsonConnection
} from "../../domain/graphql-types";
import { PostsSection } from "../../components/posts/PostsSection/PostsSection";


import '../../css/posts.css';
import { authorFromAuthorsJsonEdge } from "../../domain/converters";
import { Author } from "../../domain/models";
import { postFromMarkdownRemark } from "../../domain/converters/post-types";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface PostsIndexPageProps {
    data: {
        authorsConnection: AuthorsJsonConnection,
        markdownConnectionDev: MarkdownRemarkConnection,
        markdownConnection: MarkdownRemarkConnection
    };
}

export default class extends React.Component<PostsIndexPageProps, {}> {

    private authors: Author[] = [];

    constructor(props: PostsIndexPageProps) {
        super(props);

        this.authors =
            this.props.data.authorsConnection.edges.map(authorFromAuthorsJsonEdge);
    }

    public render() {
        console.log(this.props.data);

        let mdConn = this.props.data.markdownConnection;
        if (process.env.NODE_ENV !== `production`) {
            mdConn = this.props.data.markdownConnectionDev;
        }

        const posts = mdConn.edges.map(e => postFromMarkdownRemark(e.node, this.authors));



        return (
            <div className="wrapper">
                <PostsSection posts={posts} />
                <h1>
                    Posts
                </h1>
                <h4>{this.props.data.markdownConnection.totalCount} Posts</h4>

            </div>
        );
    }
}


export const query = graphql`
  query PostsIndexQuery {

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

    #get posts dev
    markdownConnectionDev: allMarkdownRemark(
                filter: {frontmatter: {draft: {ne: true}}}, 
                sort: {order: DESC, fields: [frontmatter___updatedDate]}, 
                limit: 1000) {
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
                    responsiveSizes (maxWidth: 1000) {
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

    #get posts
    markdownConnection: allMarkdownRemark(filter: {frontmatter: {draft: {ne: false}}}, sort: {order: DESC, fields: [frontmatter___updatedDate]}, limit: 1000) {
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
                    responsiveSizes (maxWidth: 1000) {
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
