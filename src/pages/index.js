import React from 'react';
import getPosts from '../helpers/getPosts';
import { StaticQuery, graphql } from 'gatsby';
import '../style/layout.css';
import menuHOC from '../components/menuHOC';

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => {
        return (
          <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        );
      }}
    />
  );
};

function IndexPage() {
  const allPosts = getPosts();

  return (
    <div>
      <Header />
      {allPosts.nodes.map(post => (
        <div key={post.id}>{post.frontmatter.title}</div>
      ))}
    </div>
  );
}

export default menuHOC(IndexPage);
