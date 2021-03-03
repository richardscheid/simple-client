import React from 'react';
import PropTypes from 'prop-types';

import { Header, Sidebar } from './components';
import { LayoutContainer, LayoutWrapper } from './style';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <LayoutContainer>
        <Header />

        <LayoutWrapper>
          <Sidebar />
          <div>
            <div>{children}</div>

            <div> Footer </div>
          </div>
        </LayoutWrapper>
      </LayoutContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: PropTypes.node,
};

export { Layout };
