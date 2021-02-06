import React from 'react';
import { Drawer, Hidden, Paper } from '@material-ui/core';

const Sidebar = (props) => {
  return (
    <>
      <Hidden lgUp>
        <Drawer anchor="left" variant="temporary" elevation={4}>
          Header
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Paper>Content</Paper>
      </Hidden>
    </>
  );
};

export { Sidebar };