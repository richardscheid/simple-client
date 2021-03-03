import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { Drawer, Paper } from './style';
import { SidebarHeader } from './header';

const Sidebar = (props) => {
  const { sidebarFixed, sidebarShadow, sidebarToggleMobile } = props;

  const closeDrawer = () => !sidebarToggleMobile;

  return (
    <>
      <Hidden lgUp>
        <Drawer
          open={sidebarToggleMobile}
          anchor="left"
          variant="temporary"
          elevation={4}
          onClose={closeDrawer}
        >
          <SidebarHeader />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper square elevation={sidebarShadow ? 11 : 3}>
          <SidebarHeader fixed={sidebarFixed} />
        </Paper>
      </Hidden>
    </>
  );
};

Sidebar.propTypes = {
  sidebarFixed: PropTypes.bool,
  sidebarShadow: PropTypes.bool,
  sidebarToggleMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
  sidebarFixed: true,
  sidebarShadow: false,
  sidebarToggleMobile: false,
};

export { Sidebar };
