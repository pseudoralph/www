import React from 'react';
import { closeButtonIcon, github, linkedin } from '../images/ui';

import '../style/sidebar.css';

const SideBar = ({ isShowing, closeSidebar }) => {
  return (
    <div
      className="sidebar-main"
      style={isShowing ? { display: 'block' } : { display: 'none' }}
    >
      <img
        className="sidebar-main-icon"
        onClick={closeSidebar}
        src={closeButtonIcon}
      />
      <div className="sidebar-links-container">
        <ul>
          <li>/</li>
          <li>/code</li>
          <li>/words</li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-image-container">
          <img className="sidebar-footer-image" alt="github" src={github} />
          <img className="sidebar-footer-image" alt="linkedin" src={linkedin} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
