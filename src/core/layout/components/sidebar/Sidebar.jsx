import React from 'react';
import { Drawer, Hidden, Paper } from '@material-ui/core';
import { SidebarHeader } from './header';

const Sidebar = (props) => {
  return (
    <>
      {/* <Hidden lgUp> */}
      <Drawer open anchor="left" variant="permanent" elevation={16}>
        <SidebarHeader />
      </Drawer>
      {/* </Hidden> */}
      <Hidden lgDown>
        <Paper>Sidebar Content</Paper>
      </Hidden>
    </>
  );
};

export { Sidebar };
