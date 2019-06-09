import React from 'react';
import { Link } from 'gatsby';
import { closeButtonIcon, github, linkedin } from '../images/ui';
import '../style/sidebar.css';

const SideBar = ({ isShowing, closeSidebar }) => {
  return (
    <div
      onPointerLeave={() => closeSidebar()}
      className="sidebar-main"
      style={isShowing ? { left: '0' } : { left: '-20rem' }}
    >
      <img
        className="sidebar-close-icon"
        onClick={closeSidebar}
        src={closeButtonIcon}
        alt="menu"
      />
      <div className="sidebar-links-container">
        <ul>
          <li>
            <Link to="/" activeClassName="sidebar-link-active">
              /
            </Link>
          </li>

          <li>
            <Link
              to="/code"
              partiallyActive={true}
              activeClassName="sidebar-link-active"
            >
              /code
            </Link>
          </li>

          <li>
            <Link
              to="/words"
              partiallyActive={true}
              activeClassName="sidebar-link-active"
            >
              /words
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-image-container">
          <a
            href="https://github.com/pseudoralph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sidebar-footer-image" alt="github" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/ralphp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sidebar-footer-image"
              alt="linkedin"
              src={linkedin}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
