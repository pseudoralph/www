import React from 'react';
import menuHOC from '../components/menuHOC';
import { graphql, Link } from 'gatsby';
import '../style/layout.css';
import '../style/content.css';

function BlogPreview({ node }) {
  const readMore = React.createRef();

  return (
    <Link to={`/words${node.frontmatter.path}`}>
      <div
        onMouseEnter={() => {
          readMore.current.style.visibility = 'visible';
        }}
        onMouseLeave={() => {
          readMore.current.style.visibility = 'hidden';
        }}
        className="individual-article-div"
        key={node.id}
      >
        <h2>{node.frontmatter.title}</h2>
        <p style={{ padding: '0 1em' }}>{node.frontmatter.excerpt}</p>
        <div
          ref={readMore}
          style={{ visibility: 'hidden' }}
          className="read-more"
        >
          read &gt;&gt;
        </div>
      </div>
    </Link>
  );
}

function Words({ data: { allMarkdownRemark } }) {
  return (
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
