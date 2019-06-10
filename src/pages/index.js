import React from 'react';
import menuHOC from '../components/menuHOC';
import '../style/index.css';

function IndexPage() {
  return (
    <div>
      <div className="index-wrapper-div">
        <h1 className="index-title">prdmo</h1>

        <p className="index-description">
          <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            ralph perdomo
          </span>
          <br />

          <span style={{ fontSize: '1.15rem' }}>front-end web dev</span>
        </p>
      </div>
    </div>
  );
}

export default menuHOC(IndexPage);
