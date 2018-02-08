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
                    Thi sis the home page of my site
                </h1>

                <p>
                    <Link to='/core'>Core</Link>
                    <Link to='/angular'>Angular</Link>
                </p>

                <Link to='/posts'>posts</Link>
            </div>
        );
    }
}

/*
export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
*/
