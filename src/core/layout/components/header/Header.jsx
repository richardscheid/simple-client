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
import { HeaderMenu } from './menu';
import { HeaderLogo } from './logo';

import logo from '../../../../assets/images/react.svg';

const Header = (props) => {
  const { headerShadow, headerFixed, isCollapsedLayout } = props;

  return (
    <>
      <AppBarHeader
        color="secondary"
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}
      >
        {!isCollapsedLayout && <HeaderLogo />}
        <BoxHeader>
          <Hidden lgDown>
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
            <HeaderMenu />
          </BoxMenu>
        </BoxHeader>
      </AppBarHeader>
    </>
  );
};

Header.propTypes = {
  headerFixed: PropTypes.bool,
  headerShadow: PropTypes.bool,
  isCollapsedLayout: PropTypes.bool,
};

Header.defaultProps = {
  headerFixed: true,
  headerShadow: false,
  isCollapsedLayout: false,
};

export { Header };
