const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);

    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  path
                  date
                  excerpt
                }
                id
              }
            }
          }
        }
      `)
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.frontMatter.path;
        createPage({
          path,
          component: postTemplate,
          context: {
            pathSlug: path,
            render: true
          }
        });
        resolve();
      });
    });
  });
};
