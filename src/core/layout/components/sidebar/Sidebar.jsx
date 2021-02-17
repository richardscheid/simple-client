import React from 'react';
import { Hidden, Paper } from '@material-ui/core';
import { SidebarHeader } from './header';
import { SidebarWrapper } from './style';

const Sidebar = (props) => {
  return (
    <>
      <Hidden lgUp>
        <SidebarWrapper open anchor="left" variant="permanent" elevation={16}>
          <SidebarHeader />
        </SidebarWrapper>
      </Hidden>
      <Hidden lgDown>
        <Paper>Sidebar Content</Paper>
      </Hidden>
    </>
  );
};

export { Sidebar };
