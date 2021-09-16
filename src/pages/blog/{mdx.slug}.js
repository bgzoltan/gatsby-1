import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = props => {
  console.log(props);
  const image = getImage(props.data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <GatsbyImage
        image={image}
        alt={props.data.mdx.frontmatter.hero_image_alt}
      />
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
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default BlogPost;
