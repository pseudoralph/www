import React, { useState } from 'react';
import { menuBarIcon } from '../images/ui';
import SideBar from './sideBar';
import '../style/menu.css';
import '../style/layout.css';

const MenuHOC = WrappedComponent => {
  const leftGutter = {
    margin: '0 0 0 4em'
  };
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
        <WrappedComponent style={leftGutter} />
      </div>
    );
  };
};

export default MenuHOC;
