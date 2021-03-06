import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Typography } from './style';
import { MenuList } from '../menulist';

const MenuContent = (props) => {
  const { title, pages, ...rest } = props;
  const { location } = useLocation();

  return (
    <div {...rest}>
      {title && <Typography>{title}</Typography>}
      <MenuList depth={0} pages={pages} location={location} />
    </div>
  );
};

MenuContent.propTypes = {
  pages: PropTypes.array.isRequired,
  title: PropTypes.string,
};

MenuContent.defaultProps = {
  title: PropTypes.string,
};

export { MenuContent };
