import React from 'react';
import menuHOC from '../components/menuHOC';
import '../style/layout.css';
import '../style/content.css';

function Code() {
  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/code</h1>
      </div>
      <div className="articles-wrapper" />
    </div>
  );
}

export default menuHOC(Code);
