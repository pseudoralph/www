import React from 'react';
import { graphql } from 'gatsby';

const Post = ({
  data: {
    markdownRemark: { html }
  }
}) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Post;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
    }
  }
`;
