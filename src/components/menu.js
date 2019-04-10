import React, { useState } from 'react';
import { menuBarIcon } from '../images/ui';
import SideBar from './sideBar';
import '../style/menu.css';

const Menu = () => {
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
    </div>
  );
};

export default Menu;
