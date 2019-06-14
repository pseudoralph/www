import React, { useState } from 'react';
import menuHOC from '../components/menuHOC';
import '../style/layout.css';
import '../style/content.css';

const styling = {
  expand: {
    fontFamily: 'monospace',
    display: 'inline-block',
    position: 'absolute',
    padding: '.1em .8em',
    margin: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: '700',
    cursor: 'pointer'
  },

  ul: { display: 'inline-block', margin: '0', padding: '0' },
  li: {
    display: 'inline-block',
    padding: '.2em',
    border: '.1em solid black',
    margin: '.4em'
  }
};

function Code() {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedDiv = React.createRef();
  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/code</h1>
      </div>
      <div className="articles-wrapper">
        <div
          style={{
            width: '50%',
            border: '.2em solid black',
            borderRadius: '.2em',
            padding: '.7em',
            position: 'absolute'
          }}
        >
          <p>Double 9 dominos</p>
          <div
            style={styling.expand}
            onClick={() => {
              setIsExpanded(!isExpanded);
              expandedDiv.current.style.display =
                expandedDiv.current.style.display === 'none' ? 'block' : 'none';
            }}
          >
            {isExpanded ? 'collapse [-]' : 'expand [+]'}
          </div>
          <div ref={expandedDiv} style={{ display: 'none' }}>
            <p>
              A multi-player double nine's (Cuban variant) game of dominoes.
              Manages data, control, and session state through redux. Uses
              Firebase back end with a React front end.
            </p>
            <ul style={styling.ul}>
              <li style={styling.li}>React</li>
              <li style={styling.li}>Redux </li>
              <li style={styling.li}>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default menuHOC(Code);
