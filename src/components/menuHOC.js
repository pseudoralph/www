import React, { useState } from 'react';
import { menuBarIcon } from '../images/ui';
import SideBar from './sideBar';
import '../style/menu.css';
import '../style/layout.css';

const MenuHOC = WrappedComponent => {
  return () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
      <div>
        <img
          onClick={() => setMenuToggle(true)}
          className="menu-icon-img"
          alt="menu bar"
          src={menuBarIcon}
        />
        <SideBar
          isShowing={menuToggle}
          closeSidebar={() => setMenuToggle(false)}
        />
        <WrappedComponent className="works" />
      </div>
    );
  };
};

export default MenuHOC;
