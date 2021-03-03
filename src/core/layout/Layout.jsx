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
  const { children, sidebarFixed, footerFixed } = props;

  return (
    <>
      <LayoutContainer>
        <Header />

        <LayoutWrapper>
          <Sidebar />
          <LayoutContent sidebarFixed={sidebarFixed} footerFixed={footerFixed}>
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
  children: PropTypes.node,
  sidebarFixed: PropTypes.bool,
  footerFixed: PropTypes.bool,
};

Layout.defaultProps = {
  children: PropTypes.node,
  sidebarFixed: false,
  footerFixed: false,
};

export { Layout };
