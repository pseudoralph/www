import React from 'react';
import menuHOC from '../components/menuHOC';
import { graphql, Link } from 'gatsby';
import '../style/layout.css';
import '../style/content.css';

function Words({ data: { allMarkdownRemark } }) {
  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/words</h1>
      </div>
      <div className="articles-wrapper">
        {allMarkdownRemark.edges.map(({ node }) => (
          <div className="individual-article-div" key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>
              <Link to={`/words${node.frontmatter.path}`}>
                {node.frontmatter.excerpt}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const query = graphql`
  query getAllPosts {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "words" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default menuHOC(Words);
