import React from 'react';
import menuHOC from '../components/menuHOC';
import getPosts from '../helpers/getPosts';

function Words() {
  const allPosts = getPosts();

  return (
    <div>
      {allPosts.nodes.map(post => (
        <div key={post.id}>{post.frontmatter.title}</div>
      ))}
    </div>
  );
}

export default menuHOC(Words);
