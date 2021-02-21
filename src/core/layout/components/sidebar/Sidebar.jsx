import React from 'react';
import { Hidden, Paper } from '@material-ui/core';
import { SidebarWrapper } from './style';
import { SidebarHeader } from './header';

const Sidebar = (props) => {
  return (
    <>
      {/* <Hidden lgUp> */}
      <SidebarWrapper open anchor="left" variant="permanent" elevation={16}>
        <SidebarHeader />
      </SidebarWrapper>
      {/* </Hidden> */}
      <Hidden lgDown>
        <Paper square>
          <SidebarHeader />
        </Paper>
      </Hidden>
    </>
  );
};

export { Sidebar };
