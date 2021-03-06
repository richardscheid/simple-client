import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Collapse } from '@material-ui/core';

import {
  ExpandLessIconRotate,
  ExpandLessIcon,
  WrapperButton,
  ListItem,
  Button,
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
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    open: openProp,
    label: Label,
    ...rest
  } = props;

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <ListItem {...rest} disableGutters>
        <Button
          color="primary"
          active={open}
          depth={depth}
          onClick={handleToggle}
        >
          <span>{title}</span>
          {open ? (
            <ExpandLessIcon color="inherit" />
          ) : (
            <ExpandLessIconRotate color="inherit" />
          )}
        </Button>
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
        to={href}
        active={open}
        depth={depth}
      >
        {Icon && <Icon className="app-sidebar-icon" />}
        {title}
        {Label && (
          <LabelItem>
            <Label />
          </LabelItem>
        )}
      </WrapperButton>
    </ListItem>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  open: PropTypes.bool,
};

MenuItem.defaultProps = {
  children: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.string,
  open: false,
};

export default MenuItem;
