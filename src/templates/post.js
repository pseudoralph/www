import React from 'react';
import { graphql } from 'gatsby';
import menuHOC from '../components/menuHOC';
import moment from 'moment';
import Progress from '../components/Progress';

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date }
    }
  }
}) => {
  const prettyDate = moment(`${date}`).format('dddd, MMMM Do YYYY');

  return (
    <div>
      <Progress />

      <div className="blog-post-div">
        <div>
          <h1>{title}</h1>
          <p>{prettyDate}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default menuHOC(Post);

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        date
        category
      }
      html
    }
  }
`;
