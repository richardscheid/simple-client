import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Hidden } from '@material-ui/core';
import { AppBar, Box, HeaderIconButton, HeaderImage } from './style';
import { BoxLogo } from '../../../../components';

import logo from '../../../../assets/images/react.svg';

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
            <BoxLogo title="Simple Corp">
              <Link to="/dashboard">
                <HeaderIconButton color="primary" size="small">
                  <HeaderImage src={logo} alt="Project logo" />
                </HeaderIconButton>
              </Link>
            </BoxLogo>
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
