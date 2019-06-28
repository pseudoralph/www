import Menu from './menu';
import React from 'react';

import '../style/index.css';
import '../style/layout.css';
import '../style/content.css';
import '../style/menu.css';
import '../style/sidebar.css';

const NavigationWrapper = Children => {
  return props => {
    return (
      <React.Fragment>
        <Menu />
        <Children {...props} />
      </React.Fragment>
    );
  };
};

export default NavigationWrapper;
