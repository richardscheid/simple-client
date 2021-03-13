import React, { useState, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Collapse } from '@material-ui/core';

import {
  ExpandLessRotate,
  ExpandLess,
  WrapperButton,
  MenuButton,
  ListItem,
} from './style';

const CustomRouterLink = forwardRef(function CustomLink(props, ref) {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <RouterLink {...props} />
    </div>
  );
});

const MenuItem = (props) => {
  const { t } = useTranslation();

  const { title, link, depth, children, open: openProp, ...rest } = props;

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <ListItem {...rest} disableGutters>
        <MenuButton active={open ? 1 : 0} depth={depth} onClick={handleToggle}>
          <span>{t(title)}</span>
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
        disableRipple
        variant="text"
        component={CustomRouterLink}
        exact
        to={link}
        depth={depth}
      >
        <span>{t(title)}</span>
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
