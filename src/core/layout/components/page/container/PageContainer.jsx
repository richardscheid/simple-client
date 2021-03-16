import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from './style';

const PageContainer = (props) => {
  const { children } = props;

  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

PageContainer.defaultProps = {
  children: null,
};

export { PageContainer };
