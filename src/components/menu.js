import React, { useState } from 'react';
import { menuBarIcon } from '../images/ui';
import SideBar from './sideBar';

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
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
    </>
  );
};

export default Menu;
