import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = props => {
  console.log(props);
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
      {props.data.mdx.frontmatter.title}
      {props.data.mdx.frontmatter.date}
      <MDXRenderer>
        {props.data.mdx.body}
      </MDXRenderer>
    </Layout>
  );
};
export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
export default BlogPost;
