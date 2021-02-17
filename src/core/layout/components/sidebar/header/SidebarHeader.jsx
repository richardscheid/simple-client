import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../../assets/images/react.svg';
import { IconButton, BoxHeader, SidebarHeaderContent } from './style';

const SidebarHeader = (props) => {
  return (
    <>
      <SidebarHeaderContent>
        <BoxHeader>
          <Link to="/dashboard">
            <IconButton color="primary" size="small">
              <img src={logo} alt="Project logo" />
            </IconButton>
          </Link>
        </BoxHeader>
      </SidebarHeaderContent>
    </>
  );
};

export { SidebarHeader };
