import React from 'react';
import PropTypes from 'prop-types';

import { Header, Sidebar } from './components';
import {
  LayoutContainer,
  LayoutWrapper,
  LayoutContent,
  WrapperContent,
  InnerContent,
} from './style';

const Layout = (props) => {
  const { children, fixedMenu, footerFixed } = props;

  return (
    <>
      <LayoutContainer>
        <Header />

        <LayoutWrapper fixedMenu={fixedMenu}>
          <Sidebar />
          <LayoutContent fixedMenu={fixedMenu} footerFixed={footerFixed}>
            <InnerContent>
              <WrapperContent>{children}</WrapperContent>
            </InnerContent>
            Footer
          </LayoutContent>
        </LayoutWrapper>
      </LayoutContainer>
    </>
  );
};

Layout.propTypes = {
  footerFixed: PropTypes.bool,
  fixedMenu: PropTypes.bool,
  children: PropTypes.node,
};

Layout.defaultProps = {
  footerFixed: false,
  fixedMenu: true,
  children: null,
};

export { Layout };
