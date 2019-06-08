import React from 'react';
import { graphql } from 'gatsby';
import menuHOC from '../components/menuHOC';
import moment from 'moment';

const scroller = () => {
  const docBody = document.body;
  const docElement = document.documentElement;

  return (
    ((docElement.scrollTop || docBody.scrollTop) /
      ((docElement.scrollHeight || docBody.scrollHeight) -
        docElement.clientHeight)) *
    100
  );
};

const Post = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, tags }
    }
  }
}) => {
  const prettyDate = moment(`${date}`).format('dddd, MMMM Do YYYY');

  const percentComplete = React.createRef();
  return (
    <div
      onWheel={() => (percentComplete.current.style.width = `${scroller()}%`)}
    >
      <div
        ref={percentComplete}
        style={{
          position: 'fixed',
          height: '.25rem',
          backgroundColor: 'grey',
          width: 0
        }}
      />
      {/* </div> */}
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
