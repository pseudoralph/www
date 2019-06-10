module.exports = {
  siteMetadata: {
    title: 'prdmo',
    description: 'front-end web dev',
    author: 'Ralph Perdomo',
    siteUrl: 'https://prdmo.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-141804702-1'
      }
    },
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
