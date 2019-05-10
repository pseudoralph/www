import React from 'react';
import menuHOC from '../components/menuHOC';
import '../style/layout.css';
import '../style/content.css';

function Code(props) {
  return (
    <div style={props.style}>
      <h1 className="title-heading">/code</h1>
    </div>
  );
}

export default menuHOC(Code);
