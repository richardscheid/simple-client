import React from 'react';
import { AppBar, Box, Hidden } from '@material-ui/core';

const Header = (props) => {
  const toggleSidebarMobile = () =>
    setSidebarToggleMobile(!sidebarToggleMobile);

  const { headerShadow, headerFixed, sidebarToggleMobile } = props;

  return (
    <>
      <AppBar
        color="secondary"
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}
      >
        <Box>
          <Hidden>
            <Box>Header</Box>
          </Hidden>
        </Box>
      </AppBar>
    </>
  );
};

export { Header };
