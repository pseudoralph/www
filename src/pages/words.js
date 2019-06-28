import React from 'react';
import Menu from '../components/menu';
import PageWrapper from '../components/pageWrapper';
import BlogPreview from '../components/blogPreview';

import { graphql } from 'gatsby';

function Words({ data: { allMarkdownRemark } }) {
  return (
    <>
      <Menu />
      <div className="outer-wrapper">
        <div className="title-heading-div">
          <h1 id="title-heading">/words</h1>
        </div>
        <div className="articles-wrapper">
          {allMarkdownRemark.edges.map(({ node }) => (
            <BlogPreview key={node.id} node={node} />
          ))}
        </div>
      </div>
    </>
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

export default PageWrapper(Words);
