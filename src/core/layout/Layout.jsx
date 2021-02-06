import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './components';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />

      <div>
        Sidebar
        <div>
          <div>{children}</div>

          <div> Footer </div>
        </div>
      </div>
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
