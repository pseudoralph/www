const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);

  return graphql(`
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
    console.log(result);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // const path = node.frontMatter.path;
      console.log(node);
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          pathSlug: path,
          render: true
        }
      });
    });
  });
};
