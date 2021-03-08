import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Collapse } from '@material-ui/core';

import {
  ExpandLessRotate,
  ExpandLess,
  WrapperButton,
  MenuButton,
  ListItem,
  LabelItem,
} from './style';

const CustomRouterLink = forwardRef(function CustomLink(props, ref) {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});

const MenuItem = (props) => {
  const { title, link, depth, children, open: openProp, ...rest } = props;

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <ListItem {...rest} disableGutters>
        <MenuButton
          color="primary"
          // active={open}
          depth={depth}
          onClick={handleToggle}
        >
          <span>{title}</span>
          {open ? (
            <ExpandLess color="inherit" />
          ) : (
            <ExpandLessRotate color="inherit" />
          )}
        </MenuButton>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }
  return (
    <ListItem {...rest} disableGutters>
      <WrapperButton
        activeClassName="active-item"
        color="primary"
        disableRipple
        variant="text"
        component={CustomRouterLink}
        exact
        to={link}
        depth={depth}
      >
        <span>{title}</span>
      </WrapperButton>
    </ListItem>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
};

MenuItem.defaultProps = {
  children: null,
  link: null,
  open: false,
};

export { MenuItem };
