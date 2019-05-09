import { useStaticQuery, graphql } from 'gatsby';

const getPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            path
            date
            excerpt
          }
          html
        }
      }
    }
  `);

  return allMarkdownRemark;
};

export default getPosts;
