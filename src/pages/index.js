import React from 'react';
import getPosts from '../helpers/getPosts';
import { StaticQuery, graphql, Link } from 'gatsby';
import '../style/layout.css';
import Menu from '../components/menu';

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
            <Menu />
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
  console.log(allPosts.nodes);
  return (
    <div>
      <Header />
      {allPosts.nodes.map(post => (
        <div key={post.id}>{post.frontmatter.title}</div>
      ))}
    </div>
  );
}

export default IndexPage;
