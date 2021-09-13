// module.exports = {
//   siteMetadata: {
//     siteUrl: "https://www.yourdomain.tld",
//     title: "gatsby-1",
//   },
//   plugins: [],
// };

module.exports = {
  siteMetadata: {
    title: "MY first Dog page with Gatsby"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    }
  ]
};
