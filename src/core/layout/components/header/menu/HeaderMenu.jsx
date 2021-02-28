import React, { useState } from 'react';

import { Avatar, Box, ListItem } from '@material-ui/core';
import {
  MenuContainer,
  UserContent,
  UserDetail,
  Divider,
  Button,
  Menu,
  List,
} from './style';

import avatar from '../../../../../assets/images/avatar.png';

const HeaderMenu = () => {
  const [anchor, setAnchor] = useState(null);

  function onClick(event) {
    setAnchor(event.currentTarget);
  }

  function onClose() {
    setAnchor(null);
  }

  return (
    <>
      <Button color="inherit" onClick={onClick}>
        <Box>
          <Avatar sizes={46} src={avatar} alt="Avatar" />
        </Box>
      </Button>

      <Menu
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={onClose}
      >
        <MenuContainer>
          <List>
            <Box>
              <Avatar sizes={44} src={avatar} alt="Avatar" />
            </Box>
            <UserContent>
              <UserDetail>Richard Scheid</UserDetail>
            </UserContent>
            <Divider />
            <ListItem button>My Account</ListItem>
            <ListItem button>Logout</ListItem>
          </List>
        </MenuContainer>
      </Menu>
    </>
  );
};

export { HeaderMenu };
