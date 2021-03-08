import React from 'react';
import { matchPath } from 'react-router-dom';

import { MenuItem } from '../menuitem';
import { MenuList } from '../menulist';

import { StyledMenuList } from './style';

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
        <StyledMenuList>
          <MenuList
            depth={depth + 1}
            pages={page.content}
            location={location}
          />
        </StyledMenuList>
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
