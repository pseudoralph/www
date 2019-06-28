import React from 'react';
import { Link } from 'gatsby';

const BlogPreview = ({ node }) => {
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
};

export default BlogPreview;
