import React from 'react';
import { Drawer, Hidden, Paper } from '@material-ui/core';

const Sidebar = (props) => {
  return (
    <>
      <Hidden lgUp>
        <Drawer anchor="left" variant="temporary" elevation={4}>
          Sidebar Header
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Paper>Sidebar Content</Paper>
      </Hidden>
    </>
  );
};

export { Sidebar };
