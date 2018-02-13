import * as React from "react";
import Link from "gatsby-link";
let Image = require("gatsby-image").default;
import { MarkdownRemarkConnection, ImageSharp } from "../../domain/graphql-types";


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface PostsIndexPageProps {
    data: {
        markdownConnection: MarkdownRemarkConnection
    };
}

export default class extends React.Component<PostsIndexPageProps, {}> {
    constructor(props: PostsIndexPageProps) {
        super(props);
    }

    public render() {
        console.log(this.props.data);

        const nodesHtml = this.props.data.markdownConnection.edges.map((edge, idx) => {
            const node = edge.node;

            let d = null;
            if (node.frontmatter.image) {
                //node.frontmatter.image.publicURL
                //const pImg = node.frontmatter.image.children[0] as ImageSharp;

                d = <Image responsiveSizes={node.frontmatter.image.childImageSharp.responsiveSizes} />

                //d = <Image sizes={pImg.sizes} />
            }

            const altText = 'alt';

            return (
                <div key={node.id}>
                    <Link to={node.frontmatter.path}>
                        <h3>
                            {node.frontmatter.title}{" "}
                            <span>{node.frontmatter.date}</span>
                        </h3>

                        {d}

                        <p>{node.excerpt}</p>
                    </Link>
                </div>
            );
        });

        return (
            <div>
                <h1>
                    Posts
                </h1>
                <h4>{this.props.data.markdownConnection.totalCount} Posts</h4>
                {nodesHtml}
            </div>
        );
    }
}

export const query = graphql`
  query PostsIndexQuery {

    #get posts
    markdownConnection: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
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
