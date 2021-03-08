import React from 'react';
import PropTypes from 'prop-types';

import { MenuData } from '../menudata';
import { List } from './style';

const MenuList = (props) => {
  const { pages, ...rest } = props;

  return (
    <List>
      {pages.reduce((items, page) => MenuData({ items, page, ...rest }), [])}
    </List>
  );
};

MenuList.propTypes = {
  depth: PropTypes.number,
  pages: PropTypes.array,
};

MenuList.defaultProps = {
  depth: 0,
  pages: [],
};

export { MenuList };
