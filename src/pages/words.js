import React from 'react';
import menuHOC from '../components/menuHOC';
import getPosts from '../helpers/getPosts';
import '../style/layout.css';
import '../style/content.css';

function Words(props) {
  const allPosts = getPosts();

  return (
    <div style={props.style}>
      <h1 className="title-heading">/words</h1>
      {allPosts.nodes.map(post => (
        <div className="article-div" key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default menuHOC(Words);
