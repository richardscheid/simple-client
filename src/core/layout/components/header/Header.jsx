import React from 'react';
import PropTypes from 'prop-types';

import { Hidden } from '@material-ui/core';
import {
  AppBarHeader,
  BoxHeader,
  BoxMenu,
  BoxText,
  IconButtonHeader,
  ImageHeader,
  LinkHeader,
} from './style';
import { BoxLogo } from '../../../../components';
import { Menu } from './menu';

import logo from '../../../../assets/images/react.svg';

const Header = (props) => {
  const toggleSidebarMobile = () => !sidebarToggleMobile;

  const { headerShadow, headerFixed, sidebarToggleMobile } = props;

  return (
    <>
      <AppBarHeader
        color="secondary"
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}
      >
        <BoxHeader>
          <Hidden>
            <BoxLogo title="Simple Corp">
              <LinkHeader to="/dashboard">
                <IconButtonHeader color="primary" size="medium">
                  <ImageHeader src={logo} alt="Project logo" />
                </IconButtonHeader>
              </LinkHeader>
              <Hidden smDown>
                <BoxText>Simple Corp</BoxText>
              </Hidden>
            </BoxLogo>
          </Hidden>
          <BoxMenu>
            <Menu />
          </BoxMenu>
        </BoxHeader>
      </AppBarHeader>
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
