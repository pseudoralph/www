import React, { useState } from 'react';
import { menuBarIcon } from '../images/ui';
import SideBar from './sideBar';
import '../style/menu.css';

const MenuHOC = WrappedComponent => {
  return props => {
    console.log(props);
    const [menuToggle, setMenuToggle] = useState(false);

    return (
      <div>
        <img
          onClick={() => setMenuToggle(menuToggle ? false : true)}
          className="pancake-icon"
          alt="menu bar"
          src={menuBarIcon}
        />
        <SideBar
          isShowing={menuToggle}
          closeSidebar={() => setMenuToggle(menuToggle ? false : true)}
        />
        <WrappedComponent />
      </div>
    );
  };
};

export default MenuHOC;
