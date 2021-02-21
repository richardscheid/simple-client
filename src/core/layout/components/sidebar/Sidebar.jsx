import React from 'react';
import { Hidden } from '@material-ui/core';
import { SidebarWrapper, SidebarPaper } from './style';
import { SidebarHeader } from './header';

const Sidebar = (props) => {
  const { sidebarFixed, sidebarShadow } = props;

  return (
    <>
      {/* <Hidden lgUp> */}
      <SidebarWrapper open anchor="left" variant="permanent" elevation={16}>
        <SidebarHeader />
      </SidebarWrapper>
      {/* </Hidden> */}
      <Hidden lgDown>
        <SidebarPaper square elevation={sidebarShadow ? 11 : 3}>
          <SidebarHeader fixed={sidebarFixed} />
        </SidebarPaper>
      </Hidden>
    </>
  );
};

export { Sidebar };
