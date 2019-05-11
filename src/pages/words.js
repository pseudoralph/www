import React from 'react';
import menuHOC from '../components/menuHOC';
import getPosts from '../helpers/getPosts';
import '../style/layout.css';
import '../style/content.css';

function Words() {
  const allPosts = getPosts();

  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/words</h1>
      </div>
      <div className="articles-wrapper">
        {allPosts.nodes.map(post => (
          <div className="individual-article-div" key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default menuHOC(Words);
