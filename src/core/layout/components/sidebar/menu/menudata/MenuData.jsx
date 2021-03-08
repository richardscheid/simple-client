import React from 'react';
import { matchPath } from 'react-router-dom';

import { MenuItem } from '../menuitem';
import { MenuList } from '../menulist';

const MenuData = (props) => {
  const { items, page, depth, location } = props;

  if (page.content) {
    const open = matchPath(location.pathname, {
      path: page.to,
      exact: false,
    });

    items.push(
      <MenuItem
        depth={depth}
        link={page.to}
        key={page.title}
        title={page.title}
        open={Boolean(open)}
      >
        <MenuList depth={depth + 1} pages={page.content} location={location} />
      </MenuItem>
    );
  } else {
    items.push(
      <MenuItem
        depth={depth}
        link={page.to}
        key={page.title}
        title={page.title}
      />
    );
  }

  return items;
};

export { MenuData };
