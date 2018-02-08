import * as React from "react";
import Link from "gatsby-link";


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        allMarkdownRemark: {
            totalCount: number;
            edges: {
                node: any;
                id: any;
            }[]
        };
    };
}

export default class extends React.Component<IndexPageProps, {}> {
    constructor(props: IndexPageProps) {
        super(props);
    }
    public render() {
        console.log(this.props.data);
        return (
            <div>
                <h1>
                    Amazing Pandas Eating Things
      </h1>
                <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
                {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link to={node.frontmatter.path}>
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span>{node.frontmatter.date}</span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
