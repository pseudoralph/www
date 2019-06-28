import React from 'react';
import PageWrapper from '../components/pageWrapper';
import Progress from '../components/progress';
import { graphql } from 'gatsby';

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date }
    }
  }
}) => {
  return (
    <>
      <Progress />
      <div className="blog-post-div">
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
};

export default PageWrapper(Post);

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do YYYY")
        category
      }
      html
    }
  }
`;
