import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const PageContainer = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

PageContainer.defaultProps = {
  children: null,
};

export { PageContainer };
