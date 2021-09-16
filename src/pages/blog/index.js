import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  console.log("Data:", data);

  return (
    <Layout pageTitle="My Blog">
      {data.allMdx.nodes.map(node =>
        <article key={node.id}>
          <h2>
            {node.frontmatter.title}
          </h2>
          <p>
            Posted: {node.frontmatter.date}
          </p>
          <Link to={`/blog/${node.slug}`}>Click to page</Link>
        </article>
      )}
    </Layout>
  );
};
export const data = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
