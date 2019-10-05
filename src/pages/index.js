import React from 'react';
import PageWrapper from '../components/pageWrapper';

function IndexPage() {
  return (
    <div className="index-wrapper-div">
      <h1 className="index-title">prdmo</h1>
      <p className="index-description">
        <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
          ralph perdomo
        </span>
        <br />
        <span style={{ fontSize: '1.08rem' }}>software developer</span>
      </p>
    </div>
  );
}

export default PageWrapper(IndexPage);
