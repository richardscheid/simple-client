import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { AppBar, Box } from './style';

const Header = (props) => {
  const toggleSidebarMobile = () => !sidebarToggleMobile;

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

Header.propTypes = {
  headerFixed: PropTypes.bool,
  headerShadow: PropTypes.bool,
  sidebarToggleMobile: PropTypes.bool,
};

Header.defaultProps = {
  headerFixed: true,
  headerShadow: false,
  sidebarToggleMobile: false,
};

export { Header };
