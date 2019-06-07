module.exports = {
  siteMetadata: {
    title: 'prdmo',
    description: 'front-end web dev',
    author: 'Ralph Perdomo'
  },
  plugins: [
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
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'base-uri': 'none'
          // 'script-src': 'unsafe-inline',
          // 'style-src': 'unsafe-inline',
          // 'img-src': 'unsafe-inline'

          // you can add your directives or override defaults
        }
      }
    }
  ]
};
