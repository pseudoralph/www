module.exports = {
  siteMetadata: {
    title: 'prdmo',
    description: 'front-end web dev',
    author: 'Ralph Perdomo'
  },
  plugins: [
    'gatsby-transformer-remark',
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: true, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       'script-src': "'self'",
    //       'style-src': "'self'",
    //       'img-src': "'self'"
    //       // you can add your directives or override defaults
    //     }
    //   }
    // },
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
