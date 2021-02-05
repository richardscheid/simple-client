import React from 'react';
import PropTypes from 'prop-types';

const BluePrint = (props) => {
  const { children } = props;

  return (
    <>
      <div>Header</div>
    </>
  );
};

BluePrint.propTypes = {
  children: PropTypes.node,
};

BluePrint.defaultProps = {
  children: PropTypes.node,
};

export { BluePrint };
