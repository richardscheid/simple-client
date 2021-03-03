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
  const { children, sidebarToggle, sidebarFixed, footerFixed } = props;

  return (
    <>
      <LayoutContainer>
        <Header />

        <LayoutWrapper>
          <Sidebar />
          <LayoutContent
            sidebarToggle={sidebarToggle}
            sidebarFixed={sidebarFixed}
            footerFixe={footerFixed}
          >
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
  sidebarToggle: PropTypes.bool,
  sidebarFixed: PropTypes.bool,
  footerFixed: PropTypes.bool,
};

Layout.defaultProps = {
  children: PropTypes.node,
  sidebarToggle: false,
  sidebarFixed: false,
  footerFixed: false,
};

export { Layout };
