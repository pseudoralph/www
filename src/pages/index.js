import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../style/layout.css';
import '../style/index.css';
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
            <h1 className="title-heading ">{data.site.siteMetadata.title}</h1>
            <p className="intro-text">{data.site.siteMetadata.description}</p>
          </div>
        );
      }}
    />
  );
};

function IndexPage() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default menuHOC(IndexPage);
