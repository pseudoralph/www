const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);

  return new Promise((resolve, reject) => {
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
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/words${node.frontmatter.path}`,
          component: postTemplate,
          context: {
            pathSlug: node.frontmatter.path,
            render: true
          }
        });
      });
    });

    resolve();
  });
};
