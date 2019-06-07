import React from 'react';
import { graphql } from 'gatsby';
import menuHOC from '../components/menuHOC';
import moment from 'moment';

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, tags }
    }
  }
}) => {
  const prettyDate = moment(`${date}`).format('dddd, MMMM Do YYYY');
  return (
    <div>
      <div className="blog-post-div">
        <div>
          <h1>{title}</h1>
          <p>{prettyDate}</p>
          <p>{tags}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default menuHOC(Post);
// (filter: {frontmatter: {category: {eq: "words"}}})

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        date
        tags
        category
      }
      html
    }
  }
`;
