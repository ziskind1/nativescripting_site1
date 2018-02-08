import * as React from "react";


const PostTemplate: React.StatelessComponent<{ data: any }> = ({ data }) => {
  const post = data.markdownRemark;
  const saySomethingClick = () => {
    debugger;
    alert('hi');
  };
  return (
    <div>
      <button onClick={saySomethingClick}>say somethjong</button>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />

    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default PostTemplate;


