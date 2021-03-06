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
        icon={page.icon}
        key={page.label}
        label={page.badge}
        open={Boolean(open)}
        title={page.label}
      >
        <div className="sidebar-menu-children py-2">
          <MenuList
            depth={depth + 1}
            pages={page.content}
            location={location}
          />
        </div>
      </MenuItem>
    );
  } else {
    items.push(
      <MenuItem
        depth={depth}
        href={page.to}
        icon={page.icon}
        key={page.label}
        label={page.badge}
        title={page.label}
      />
    );
  }

  return items;
};

export { MenuData };
