module.exports = {
  siteMetadata: {
    title: `prdmo`,
    description: `musings from a writer turned front-end dev`,
    author: `Ralph Perdomo`
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
  ]
};
