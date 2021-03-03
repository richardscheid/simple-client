import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { SidebarDrawer, SidebarPaper } from './style';
import { SidebarHeader } from './header';

const Sidebar = (props) => {
  const { sidebarFixed, sidebarShadow, sidebarToggleMobile } = props;

  const closeDrawer = () => !sidebarToggleMobile;

  return (
    <>
      <Hidden lgUp>
        <SidebarDrawer
          open={sidebarToggleMobile}
          anchor="left"
          variant="temporary"
          elevation={4}
          onClose={closeDrawer}
        >
          <SidebarHeader />
        </SidebarDrawer>
      </Hidden>
      <Hidden mdDown>
        <SidebarPaper square elevation={sidebarShadow ? 11 : 3}>
          <SidebarHeader fixed={sidebarFixed} />
        </SidebarPaper>
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
