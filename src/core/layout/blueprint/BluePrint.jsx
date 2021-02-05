import React from 'react';
import PropTypes from 'prop-types';

const BluePrint = (props) => {
  const { children } = props;

  return (
    <>
      <div>Header</div>

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

BluePrint.propTypes = {
  children: PropTypes.node,
};

BluePrint.defaultProps = {
  children: PropTypes.node,
};

export { BluePrint };
